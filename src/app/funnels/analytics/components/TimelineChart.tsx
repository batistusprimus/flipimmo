interface TimelineDataPoint {
  date: string;
  count: number;
}

interface TimelineChartProps {
  data: TimelineDataPoint[];
  title?: string;
  color?: string;
}

export function TimelineChart({ 
  data, 
  title = "Contacts over Time",
  color = "#3b82f6" 
}: TimelineChartProps) {
  const maxCount = Math.max(...data.map(p => p.count), 1);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
        {title}
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </h3>
      
      <div className="h-48 relative">
        <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
          {/* Grille de fond */}
          <line x1="0" y1="0" x2="0" y2="150" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="37.5" x2="400" y2="37.5" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="75" x2="400" y2="75" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="112.5" x2="400" y2="112.5" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="150" x2="400" y2="150" stroke="#e5e7eb" strokeWidth="1" />
          
          {/* Aire sous la courbe */}
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <polygon
            fill="url(#areaGradient)"
            points={`
              0,150 
              ${data.map((point, index) => {
                const x = (index / (data.length - 1)) * 400;
                const y = 150 - (point.count / maxCount) * 140 - 5;
                return `${x},${y}`;
              }).join(' ')}
              400,150
            `}
          />
          
          {/* Ligne de données */}
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="2"
            points={data.map((point, index) => {
              const x = (index / (data.length - 1)) * 400;
              const y = 150 - (point.count / maxCount) * 140 - 5;
              return `${x},${y}`;
            }).join(' ')}
          />
          
          {/* Points */}
          {data.map((point, index) => {
            const x = (index / (data.length - 1)) * 400;
            const y = 150 - (point.count / maxCount) * 140 - 5;
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="white"
                  stroke={color}
                  strokeWidth="2"
                  className="hover:r-6 transition-all cursor-pointer"
                />
                {/* Tooltip hover */}
                <title>{`${point.date}: ${point.count} contact${point.count > 1 ? 's' : ''}`}</title>
              </g>
            );
          })}
        </svg>
        
        {/* Axe X - Labels */}
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          {data.map((point, index) => (
            index % 2 === 0 && <span key={index}>{point.date}</span>
          ))}
        </div>
      </div>
    </div>
  );
}



