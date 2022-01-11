import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';


export const Chart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
  }, []);

  return (
    <div className="年龄段-图3">9
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};