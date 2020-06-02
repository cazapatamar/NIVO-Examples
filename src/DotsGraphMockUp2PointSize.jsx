import React from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot'

const sampleData = [
    {
        id: 'girls low',
        data: [
            { id: 0, x: 0, y: 2.0, z: 1 },
            { id: 1, x: 1, y: 2.1, z: 2 },
            { id: 2, x: 2, y: 2.3, z: 4 },
            { id: 3, x: 3, y: 2.5, z: 1 },
            { id: 4, x: 4, y: 2.7, z: 3 },
            { id: 5, x: 5, y: 2.9, z: 0 },
            { id: 6, x: 6, y: 3.0, z: 1 },
            { id: 7, x: 7, y: 3.2, z: 3 },
            { id: 8, x: 8, y: 3.3, z: 2 },
            { id: 9, x: 9, y: 3.5, z: 3 },
            { id: 10, x: 10, y: 3.6, z: 0 },
            { id: 11, x: 11, y: 3.8, z: 0 },
            { id: 12, x: 12, y: 3.9, z: 4 },
            { id: 13, x: 13, y: 4.0, z: 1 },
        ],
    },
    {
        id: 'girls med',
        data: [
            { id: 0, x: 0, y: 3.2, z: 1 },
            { id: 1, x: 1, y: 3.3, z: 3 },
            { id: 2, x: 2, y: 3.6, z: 4 },
            { id: 3, x: 3, y: 3.8, z: 0 },
            { id: 4, x: 4, y: 4.1, z: 1 },
            { id: 5, x: 5, y: 4.3, z: 1 },
            { id: 6, x: 6, y: 4.6, z: 2 },
            { id: 7, x: 7, y: 4.8, z: 2 },
            { id: 8, x: 8, y: 5.0, z: 3 },
            { id: 9, x: 9, y: 5.2, z: 0 },
            { id: 10, x: 10, y: 5.4, z: 1 },
            { id: 11, x: 11, y: 5.5, z: 1 },
            { id: 12, x: 12, y: 5.7, z: 2 },
            { id: 13, x: 13, y: 5.8, z: 4 },
        ],
    },
    {
        id: 'girls high',
        data: [
            { id: 0, x: 0, y: 4.8, z: 4 },
            { id: 1, x: 1, y: 5.1, z: 3 },
            { id: 2, x: 2, y: 5.4, z: 4 },
            { id: 3, x: 3, y: 5.7, z: 1 },
            { id: 4, x: 4, y: 6.1, z: 0 },
            { id: 5, x: 5, y: 6.5, z: 1 },
            { id: 6, x: 6, y: 6.8, z: 2 },
            { id: 7, x: 7, y: 7.1, z: 3 },
            { id: 8, x: 8, y: 7.3, z: 3 },
            { id: 9, x: 9, y: 7.6, z: 1 },
            { id: 10, x: 10, y: 7.8, z: 1 },
            { id: 11, x: 11, y: 8.1, z: 0 },
            { id: 12, x: 12, y: 8.3, z: 4 },
            { id: 13, x: 13, y: 8.5, z: 1 },
        ],
    },
];

const sampleData2 = [
    {
        id: 'bajo',
        data: [
            { id: 0, x: 0.19, y: 4.25, z: 0.19 },
        ],
    },
    {
        id: 'medio',
        data: [
            { id: 0, x: 9.42, y: 7.5, z: 9.42 },
        ],
    },
    {
        id: 'alto',
        data: [
            { id: 0, x: 35.62, y: 8.5, z: 35.62 },
            { id: 1, x: 54.77, y: 8.5, z: 54.77 },
        ],
    },
];

const DotsGraphMockUp2PointSize = () => (
  <div style={{ height: '400px', display: 'block'}}>
      <h2>
        DotsGraphMockUp : Second MockUp - Varying node size
      </h2>
      <ResponsiveScatterPlot
        data={sampleData2}
        margin={{
            top: 24, 
            right: 24, 
            bottom: 80, 
            left: 80
        }}
        yScale={{
            type: 'linear',
            min: 4,
            max: 10,
          }}
        colors={[ "#eabc47", "#51b4c1", "#ea495f", "#2a363b" ]}  
        // nodeSize= 10,
        blendMode='multiply'
        xFormat={d => `${d}%`}
        // yFormat={d => `${d} kg`}
        axisBottom={{
            legend: '% Area afectación',
            legendOffset: 36,
            legendPosition: 'middle',
            format: d => `${d}%`,
        }}
        axisLeft={{
            legend: 'Factor de Compensación',
            legendOffset: -40,
            legendPosition: 'middle',
            // format: d => `${d} kg`,
        }}
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'row',
                translateY: 60,
                itemWidth: 130,
                itemHeight: 12,
                symbolSize: 12,
                symbolShape: 'circle',
            },
        ]}
        nodeSize={{ key: 'z', values: [0, 100], sizes: [6, 55] }} />
    </div>
);

export default DotsGraphMockUp2PointSize;
