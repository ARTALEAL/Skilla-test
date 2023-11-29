import SideMenu from '../SideMenu/SideMenu';
import './calls.css';
import {
  getFormatDate,
  getDaysDates,
  getMonthDates,
  getYearsDates,
} from '../../utils/utils';
import searchLogo from '../../images/basic search.svg';
import avatar from '../../images/avatar-header.png';
import arrow from '../../images/keyboard_arrow_down_black_24dp 1.svg';
import BalanceButton from '../elements/BalanceButton/BalanceButton';
import DatePicker from '../elements/DatePicker/DatePicker';
import FilterCalls from '../elements/FilterCalls/FilterCalls';
import CallsTable from '../elements/CallsTable/CallsTable';
import { useEffect, useState } from 'react';
import { getCalls } from '../../utils/api';

function Calls() {
  const [calls, setCalls] = useState([]);
  const [isLoading, setIsLoading] = useState('false');
  const [days, setDays] = useState(2);

  async function getData(filter) {
    try {
      setIsLoading(true);
      const data = await getCalls(filter);
      const { results } = data;
      setCalls(results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function filterDays(days) {
    const dates = getDaysDates(new Date(), days);
    const { start, end } = dates;
    const started = start.split(',');
    const ended = end.split(',');
    getData(`date_start=${started[0]}&date_end=${ended[0]}&limit=10000`);
  }

  function filterWeek() {
    const dates = getDaysDates(new Date(), 6);
    const { start, end } = dates;
    const started = start.split(',');
    const ended = end.split(',');
    getData(`date_start=${started[0]}&date_end=${ended[0]}&limit=10000`);
  }

  function filterMonth() {
    const dates = getMonthDates(new Date());
    const { start, end } = dates;
    const started = start.split(',');
    const ended = end.split(',');
    getData(`date_start=${started[0]}&date_end=${ended[0]}&limit=10000`);
  }

  function filterYear() {
    const dates = getYearsDates(new Date());
    const { start, end } = dates;
    const started = start.split(',');
    const ended = end.split(',');
    getData(`date_start=${started[0]}&date_end=${ended[0]}&limit=10000`);
    console.log('year');
  }

  useEffect(() => {
    const renderData = async () => filterDays(days);
    renderData();
  }, [days]);

  function prevDays() {
    if (days) {
      setDays(days - 1);
      filterDays(days);
      console.log(days);
    }
  }

  function nextDays() {
    setDays(days + 1);
    filterDays(days);
    console.log(days);
  }
  console.log(days);
  // console.log(calls);

  return (
    <main className="calls">
      <SideMenu />
      <header className="calls-header">
        <div className="calls-header__info-container">
          <div className="calls-header__date">{getFormatDate(new Date())}</div>
          <div className="calls-header__calls-info">
            <div className="calls-header__calls-info-item">
              <p className="calls-header__calls-info-item-text">
                Новые звонки{' '}
                <span
                  className="calls-header__calls-info-item-text"
                  data-color="green"
                >
                  20 из 30 шт
                </span>
              </p>
              <div className="calls-header__calls-info-item-scale">
                <hr data-color="green" /> <hr data-color="green-end" />
              </div>
            </div>
            <div className="calls-header__calls-info-item">
              <p className="calls-header__calls-info-item-text">
                Качество разговоров{' '}
                <span
                  className="calls-header__calls-info-item-text"
                  data-color="yellow"
                >
                  40%
                </span>
              </p>
              <div className="calls-header__calls-info-item-scale">
                <hr data-color="yellow" /> <hr data-color="yellow-end" />
              </div>
            </div>
            <div className="calls-header__calls-info-item">
              <p className="calls-header__calls-info-item-text">
                Конверсия в заказ{' '}
                <span
                  className="calls-header__calls-info-item-text"
                  data-color="red"
                >
                  67%
                </span>
              </p>
              <div className="calls-header__calls-info-item-scale">
                <hr data-color="red" /> <hr data-color="red-end" />
              </div>
            </div>
          </div>
        </div>
        <div className="calls-header__user-container">
          <button className="calls-header__user-container-search-btn">
            <img
              src={searchLogo}
              alt="Поиск"
              className="calls-header__user-container-search-btn-img"
            />
          </button>
          <div className="calls-header__user-container-select-wrapper">
            <select
              className="calls-header__user-container-select"
              name="agent"
              id="agent-select"
            >
              <option value="">ИП Сидорова Александра Михайловна</option>
              <option value="sidorova">
                ИП Сидорова Александра Михайловна
              </option>
            </select>
          </div>
          <button className="calls-header__user-container-profile-btn">
            <img src={avatar} alt="Аватар" />
            <img src={arrow} alt="Стрелка" />
          </button>
        </div>
      </header>
      <section className="calls-section">
        <div className="calls-section__buttons-container">
          <BalanceButton />
          <DatePicker
            days={filterDays}
            week={filterWeek}
            month={filterMonth}
            year={filterYear}
            prev={prevDays}
            next={nextDays}
            count={days}
          />
        </div>
        <FilterCalls />
        <CallsTable data={calls} loading={isLoading} />
      </section>
    </main>
  );
}

export default Calls;
