import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Complexidade', N1: 623, N2: 230, N3: 351 },
];

const ComplexChart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barGap={80} 
          barSize={70} 
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar 
            dataKey="N1" 
            fill="#A5DDF5" 
            name="N1" 
            radius={[10, 10, 0, 0]} 
          />
          <Bar 
            dataKey="N2" 
            fill="#C9B6F5" 
            name="N2" 
            radius={[10, 10, 0, 0]} 
          />
          <Bar 
            dataKey="N3" 
            fill="#F5B6B6" 
            name="N3" 
            radius={[10, 10, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComplexChart;
