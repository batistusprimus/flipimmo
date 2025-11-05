interface DeviceData {
  name: 'Desktop' | 'Tablet' | 'Mobile' | 'Other';
  percentage: number;
}

interface DeviceSplitProps {
  data: DeviceData[];
  title?: string;
}

const DEVICE_COLORS: Record<string, string> = {
  Desktop: '#3b82f6',  // blue-500
  Mobile: '#8b5cf6',   // violet-500
  Tablet: '#06b6d4',   // cyan-500
  Other: '#6b7280',    // gray-500
};

const DEVICE_ICONS: Record<string, React.ReactNode> = {
  Desktop: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Mobile: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Tablet: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Other: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export function DeviceSplit({ data, title = "Device Split" }: DeviceSplitProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
        {title}
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </h3>
      
      <div className="space-y-4">
        {data.map((device) => (
          <div key={device.name}>
            <div className="flex justify-between items-center text-sm mb-2">
              <div className="flex items-center gap-2">
                <span style={{ color: DEVICE_COLORS[device.name] }}>
                  {DEVICE_ICONS[device.name]}
                </span>
                <span className="text-gray-600">{device.name}</span>
              </div>
              <span className="font-semibold text-gray-900">{device.percentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="h-2 rounded-full transition-all duration-500 ease-out"
                style={{ 
                  width: `${device.percentage}%`,
                  backgroundColor: DEVICE_COLORS[device.name]
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Total */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-gray-600">Total</span>
          <span className="text-gray-900">
            {data.reduce((sum, d) => sum + d.percentage, 0).toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}



