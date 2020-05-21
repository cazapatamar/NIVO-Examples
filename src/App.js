import React from 'react';
// import { LineComputedSerieData } from '@nivo/line';

import MultiLinesGraph from './MultiLinesGraph';
import MultiLinesGraphTest1OnClic from './MultiLinesGraphTest1OnClic';
import MultiLinesGraphTest2OnClic from './MultiLinesGraphTest2OnClic';
import MultiLinesGraphTest3OnClic from './MultiLinesGraphTest3OnClic';
import MultiLinesGraphMockup from './MultiLinesGraphMockup';
import DotsGraphMockUp from './DotsGraphMockUp';

// import { LegendMouseHandlerData } from '@nivo/legends';

function App() {

  // const colorBy = (data: LineComputedSerieData) => data.color as string

  return (
  <div>
    <MultiLinesGraph />

    <MultiLinesGraphMockup />

    <MultiLinesGraphTest1OnClic />

    <MultiLinesGraphTest2OnClic />

    <MultiLinesGraphTest3OnClic />

    <DotsGraphMockUp />
    
  </div>
  );
}

export default App;
