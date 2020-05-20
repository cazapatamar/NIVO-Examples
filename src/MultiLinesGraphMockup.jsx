import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import dataLines from './dataLines';

const MultiLinesGraphMockup = () => (
  
  <div style={{ height: '490px', width: '750px', display: 'block' }}>
      <h2>
        MultiLinesGraphMockup: First MockUp
      </h2>
      <ResponsiveLine
        data={dataLines}
        curve="cardinal"
        onClick={(data, event) => {
          console.log('onClick - data', data);
          console.log('onClick - event', event);
          // data.serieColor = '#ff7f0e';
          // data.borderColor = '#ff7f0e';
          // data.color = '#ff7f0e';
        }}
        margin={{
          top: 50,
          left: 60,
          right: 110,
          bottom: 100,
        }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 100,
          stacked: false,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Año',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Indice promedio Huella Humana',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'category10' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
  </div>
);

export default MultiLinesGraphMockup;
