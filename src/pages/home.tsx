import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import {Chart1} from '../components/Chart-1';
import {Chart2} from '../components/Chart-2';
import {Chart3} from '../components/Chart-3';
import {Chart4} from '../components/Chart-4';
import {Chart5} from '../components/Chart-5';
import {Chart6} from '../components/Chart-6';
import {Chart8} from '../components/Chart-8';
import {Chart9} from '../components/Chart-9';
import {Chart7} from '../components/Chart-7';

const px = (n) => n / 2420 * (window as any).pageWidth;


export const Home = () => {
  const year = new Date().getFullYear();


  return (
    <div className="home">
      <header style={{backgroundImage: `URL(${headerBg})`}}/>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
        </section>
        <section className=" bordered section2">
          <Chart3/>
          <Chart4/>
        </section>
        <section className=" bordered section3">
          <Chart5/>
        </section>
        <section className=" bordered section4">
          <Chart6/>
          <div className="bordered 年龄段">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
              <Chart7/>
              <Chart8/>
              <Chart9/>
            </div>
          </div>
        </section>
        <section className=" bordered section5">

        </section>
      </main>
      <footer>
        &copy; czc2222 2020-{year}
      </footer>
    </div>
  );
};
