import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const MultiLinesGraphTest1OnClic = () => (

  <div style={{ height: '490px', width: '750px' }}>
      
      <h2>
        Test Lines 1 - OnClic: 
      </h2>
      <ResponsiveLine
        data={[
            {
                id: 'thing A',
                data: [
                    { x: 0, y: 12, extra: 12 },
                    { x: 1, y: 9 },
                    { x: 2, y: 15, extra: true },
                    { x: 3, y: 7 },
                    { x: 4, y: null },
                    { x: 5, y: 9 },
                    { x: 6, y: 11, extra: 'string' },
                ],
                extra: 'yay',
                color: '#B00',
            },
            {
                id: 'thing B',
                data: [
                    { x: 0, y: 9 },
                    { x: 1, y: 12 },
                    { x: 2, y: null },
                    { x: 3, y: 11 },
                    { x: 4, y: 17 },
                    { x: 5, y: 19 },
                    { x: 6, y: 5 },
                ],
                color: '#F77',
            },
        ]}
        xScale={{
            type: 'linear',
        }}
        yScale={{
            type: 'linear',
            min: 0,
            max: 20,
        }}
        margin={{
            top: 60,
            right: 100,
            bottom: 60,
            left: 100,
        }}
        curve="monotoneX"
        lineWidth={3}
        colors={{ scheme: 'category10' }}
        axisTop={undefined}
        axisLeft={{
            tickRotation: 0,
            tickSize: 6,
            tickValues: 5,
            legend: 'whatever for x',
            legendOffset: -40,
            legendPosition: 'middle',
            // format: (v: number) => `${v}`,
        }}
        enableGridX={true}
        enableGridY={true}
        enableDots={true}
        dotSize={12}
        enableDotLabel={true}
        enableArea={true}
        areaBaselineValue={4}
        areaOpacity={0.15}
        markers={[
            {
                axis: 'x',
                value: 4,
                legend: 'X marker a 4',
                lineStyle: {
                    stroke: 'blue',
                },
                textStyle: {
                    fill: 'blue',
                },
            },
            {
                axis: 'y',
                value: 4,
                legend: 'Y marker at 4',
                lineStyle: {
                    stroke: 'red',
                },
                textStyle: {
                    fill: 'red',
                },
            },
        ]}
        isInteractive={true}
        enableStackTooltip={true}
        legends={[
            {
                anchor: 'top-left',
                translateX: 20,
                translateY: 10,
                direction: 'column',
                itemWidth: 100,
                itemHeight: 26,
                itemOpacity: 0.8,
                symbolShape: 'circle',
                onClick: (data, event, node) => {
                  console.log('data', data);
                  console.log('event', event);
                  console.log('event.clientX', event.clientX);
                  console.log('event.clientY', event.clientY);
                  console.log('event.currentTarget', event.currentTarget);
                  console.log('event.detail', event.detail);
                  console.log('event.target', event.target);
                  console.log('event.timeStamp', event.timeStamp);
                  console.log('event.type', event.type);
                  console.log('event.view', event.view);
                  console.log('node', node);
                },
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: '#eeeeee',
                            itemOpacity: 1,
                        },
                    },
                ],
            },
        ]}
        onClick={(data, event) => {
            console.log('onClick - data', data);
            console.log('onClick - event', event);
        }}
        animate={true}
        motionStiffness={150}
        motionDamping={15}
    />
</div>

);

export default MultiLinesGraphTest1OnClic;
