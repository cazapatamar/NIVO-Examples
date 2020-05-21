import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import dataMultiLinesGraphTest3OnClic from './dataMultiLinesGraphTest3OnClic';

/** Helper function to display the correct number of the week,
 *  when the first screen is found. Otherwise, an empty string
 *  is returned.
 *
 * @param {LineValue} value
 * @returns {string}
 */
export const formatValue = value => {
    const [week, screen] = value.split(".");
  
    return `${screen === "1" ? week : ""}`;
  };

  // const barColor = "#0095ff";
  // const lineColor = "rgba(200, 30, 15, 1)";
  // const areaColor = "#0095ff";
  
  // `v` is used for bars
  // `v1` is used for line
  // `v2` is used for area
  /*
  const gridXValues = [
    "1.1",
    "2.1",
    "3.1",
    "4.1",
    "5.1",
    "6.1",
    "7.1",
    "8.1",
    "9.1"
  ];
*/

const MultiLinesGraphTest3OnClic = () => (

    <div style={{ height: 490 }}>
        <h2>
            Test Lines 3 - OnClic: 
        </h2>
        <ResponsiveLine
        // data={filterData(data)}
        data={dataMultiLinesGraphTest3OnClic}
        margin={{ top: 20, right: 50, bottom: 60, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", stacked: false, min: 0, max: 100 }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 7,
            tickRotation: 0,
            legend: "Weeks",
            legendOffset: 50,
            legendPosition: "middle",
            format: value => formatValue(value)
        }}
        axisLeft={null}
        colors={{ scheme: "category10" }}
        enablePoints={false}
        enableGridY={false}
        crosshairType="x"
        onClick={(point, event) => console.log(point)}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
        // enableSlices="x"
        debugMesh
        useMesh={true} // As of 31-05-19, a d3 issue causes a crash if less than 3 points are drawn.
        legends={[
            {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 5,
            translateY: 60,
            itemsSpacing: 3,
            itemDirection: "left-to-right",
            itemWidth: 60,
            itemHeight: 15,
            itemOpacity: 0.75,
            symbolSize: 8,
            symbolShape: "square",
            effects: [
                {
                on: "hover",
                style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1
                }
                }
            ]
            }
        ]}
        // @ts-ignore
        // markers={createMarkers(data, gridXValues, currentPosition)}
        theme={{
            markers: { textColor: "#000", fontSize: "14" },
            axis: { legend: { text: { fontSize: "14" } } },
            legends: { text: { fontSize: "12" } }
        }}
        // tooltip={emptyTooltip}
        />
    </div>
);

export default MultiLinesGraphTest3OnClic;
