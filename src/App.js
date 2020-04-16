import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import dataLines from './dataLines';
import dataBarPersistencia from './dataBarPersistencia';
import dataBarHH from './dataBarHH';
import dataDots from './dataDots'


function App() {
  return (
  <div>
    <div style={{ height: '400px', width: '750px' }}>
      <h2>
        Sección 1: Huella humana en el área de consulta para el último año
      </h2>
      <ResponsiveBar
        data={dataBarHH}
        keys={[ 'Natural (0-15)', 'Baja (15-30)', 'Media (30-60)', 'Alta (60-100)' ]}
        indexBy="año"
        margin={{ top: 0, right: 10, bottom: 0, left: 10 }}
        padding={0.9}
        layout="horizontal"
        colors={{ scheme: 'accent' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Dinámicas'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Estable alta'
                },
                id: 'lines'
            }
        ]}
        borderWidth={2}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        labelSkipWidth={22}
        labelSkipHeight={10}
        labelTextColor={{ from: ' ', modifiers: [ [ 'darker', 1.6 ] ] }}
        animate={true}
        motionStiffness={180}
        motionDamping={15}
    />
)
    </div>
    <div style={{ height: '400px', width: '750px' }}>
      <h2>
        Seccion 2: Huella humana a través del tiempo
      </h2>
      <ResponsiveLine
        data={dataLines}
        curve="cardinal"
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

    <div style={{ height: '400px', width: '750px' }}>
      <h2>
        Sección 3: Persistencia de la huella humana
      </h2>
      <ResponsiveBar
        data={dataBarPersistencia}
        keys={[ 'Estable natural', 'Dinámicas', 'Estable alta' ]}
        indexBy="Jurisdiccion"
        margin={{ top: 20, right: 130, bottom: 130, left: 60 }}
        padding={0.7}
        layout="horizontal"
        colors={{ scheme: 'yellow_green' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Dinámicas'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Estable alta'
                },
                id: 'lines'
            }
        ]}
        borderWidth={2}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 6,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Peristencia',
            legendPosition: 'middle',
            legendOffset: 43
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Jurisdicción Ambiental',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={22}
        labelSkipHeight={10}
        labelTextColor={{ from: ' ', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'row',
                justify: false,
                translateX: 65,
                translateY: 77,
                itemsSpacing: 60,
                itemWidth: 106,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={180}
        motionDamping={15}
    />
)
    </div>

    <div style={{ height: '400px', width: '750px' }}>
      <h2>
        Compensaciones: Gráfico de puntos
      </h2>
      <ResponsiveScatterPlot
        data={dataDots}
        margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        xFormat={function(e){return e+" kg"}}
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        yFormat={function(e){return e+" cm"}}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'weight',
            legendPosition: 'middle',
            legendOffset: 46
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'size',
            legendPosition: 'middle',
            legendOffset: -60
        }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 130,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  </div>
  );
}

export default App;
