interface FunnelStep {
  name: string;
  visits: number;
  rate: number;
}

interface FunnelChartProps {
  steps: FunnelStep[];
  title?: string;
}

export function FunnelChart({ steps, title = "Page to Page Conversion Rate" }: FunnelChartProps) {
  const maxVisits = Math.max(...steps.map(s => s.visits));

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
        {title}
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </h3>
      
      <div className="flex items-end justify-between gap-2 h-64">
        {steps.map((step, index) => {
          const height = (step.visits / maxVisits) * 100;
          const nextStep = steps[index + 1];
          const dropoff = nextStep 
            ? Math.round(((step.visits - nextStep.visits) / step.visits) * 100) 
            : 0;
          
          return (
            <div key={step.name} className="flex-1 flex flex-col items-center gap-2">
              <div className="relative w-full flex flex-col items-center">
                {nextStep && (
                  <div className="text-xs text-gray-500 mb-1">↓ {dropoff}%</div>
                )}
                <div 
                  className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors cursor-pointer relative group"
                  style={{ height: `${height}%`, minHeight: '20px' }}
                  title={`${step.visits} visites`}
                >
                  {/* Tooltip au survol */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    {step.visits} visites
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-600 text-center truncate w-full" title={step.name}>
                {step.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}



