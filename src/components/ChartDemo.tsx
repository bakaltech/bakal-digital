import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1100 },
];

export const AnalyticsChart = () => {
  return (
    <div className="w-full h-full p-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0066CC" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#0066CC" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8E8ED" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#86868B', fontSize: 10 }}
            dy={10}
          />
          <YAxis 
            hide 
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#FFFFFF', 
              border: '1px solid #E8E8ED',
              borderRadius: '12px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              fontSize: '12px'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#0066CC" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorValue)" 
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const IoTChart = () => {
  const iotData = Array.from({ length: 20 }, (_, i) => ({
    time: i,
    temp: 60 + Math.random() * 20,
    pressure: 100 + Math.random() * 50,
  }));

  return (
    <div className="w-full h-full p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={iotData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8E8ED" />
          <XAxis hide />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1D1D1F', 
              border: 'none',
              borderRadius: '8px',
              color: '#FFFFFF',
              fontSize: '10px'
            }}
            itemStyle={{ color: '#FFFFFF' }}
          />
          <Line 
            type="stepAfter" 
            dataKey="temp" 
            stroke="#0066CC" 
            strokeWidth={2} 
            dot={false}
            animationDuration={1500}
          />
          <Line 
            type="stepAfter" 
            dataKey="pressure" 
            stroke="#86868B" 
            strokeWidth={1} 
            dot={false}
            strokeDasharray="5 5"
            animationDuration={2000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
