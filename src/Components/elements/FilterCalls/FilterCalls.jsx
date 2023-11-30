import { useState } from 'react';
import './filterCalls.css';
import { callTypes } from '../../../utils/constants';

function FilterCalls({ types }) {
  const [isOpenTypes, setIsOpenTypes] = useState(false);
  const [isFilters, setIsFilters] = useState(false);
  const [currentType, setCurrentType] = useState(callTypes[2]);

  const handleOpenTypes = () => {
    setIsOpenTypes(!isOpenTypes);
  };

  const filterIncome = () => {
    setIsFilters(true);
    setCurrentType(callTypes[1]);
    types(1);
    setIsOpenTypes(false);
  };

  const filterOutCome = () => {
    setIsFilters(true);
    setCurrentType(callTypes[0]);
    types(0);
    setIsOpenTypes(false);
  };

  const resetFilters = () => {
    setCurrentType(callTypes[2]);
    types();
    setIsFilters(false);
  };

  return (
    <div className="filter-calls__container">
      <div className="filter-calls__input-container">
        <label htmlFor="search-calls">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z"
              fill="#ADBFDF"
            />
          </svg>
        </label>
        <input
          type="tel"
          className="filter-calls__search-input"
          placeholder="Поиск по звонкам"
          id="search-calls"
        />
      </div>
      <div className="filter-calls__filters-container">
        <ul className="filter-calls__filters-list">
          {isFilters && (
            <li
              className="filter-calls__filters-list-item"
              onClick={resetFilters}
            >
              <button className="filter-calls__filters-list-button">
                Сбросить фильтры
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <g clipPath="url(#clip0_1_2878)">
                  <path
                    d="M12.75 3.88125L11.8688 3L8.375 6.49375L4.88125 3L4 3.88125L7.49375 7.375L4 10.8688L4.88125 11.75L8.375 8.25625L11.8688 11.75L12.75 10.8688L9.25625 7.375L12.75 3.88125Z"
                    fill="#ADBFDF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_2878">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </li>
          )}
          <li
            className="filter-calls__filters-list-item"
            onClick={handleOpenTypes}
          >
            <button className="filter-calls__filters-list-button">
              {currentType}
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              className={isOpenTypes ? 'active' : null}
            >
              <path
                d="M13.9001 8.60117L13.3991 8.10024C13.3324 8.03334 13.2555 8 13.1685 8C13.0818 8 13.0049 8.03334 12.9382 8.10024L9.00005 12.0382L5.06209 8.10034C4.9953 8.03345 4.91844 8.00011 4.83161 8.00011C4.74475 8.00011 4.66789 8.03345 4.60113 8.10034L4.10024 8.60131C4.03334 8.66806 4 8.74492 4 8.83179C4 8.91858 4.03345 8.99544 4.10024 9.06219L8.76957 13.7316C8.83633 13.7984 8.91322 13.8318 9.00005 13.8318C9.08688 13.8318 9.16364 13.7984 9.23036 13.7316L13.9001 9.06219C13.9668 8.99541 14 8.91854 14 8.83179C14 8.74492 13.9668 8.66806 13.9001 8.60117Z"
                fill="#ADBFDF"
              />
            </svg>
            {isOpenTypes && (
              <ul className="filter-calls__filters-list-item-filter">
                <li
                  className="filter-calls__filters-list-item-filter-item"
                  onClick={filterIncome}
                >
                  Входящие
                </li>
                <li
                  className="filter-calls__filters-list-item-filter-item"
                  onClick={filterOutCome}
                >
                  Исходящие
                </li>
              </ul>
            )}
          </li>
          <li className="filter-calls__filters-list-item">
            <button className="filter-calls__filters-list-button">
              Все сотрудники
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
            >
              <path
                d="M13.9001 8.60117L13.3991 8.10024C13.3324 8.03334 13.2555 8 13.1685 8C13.0818 8 13.0049 8.03334 12.9382 8.10024L9.00005 12.0382L5.06209 8.10034C4.9953 8.03345 4.91844 8.00011 4.83161 8.00011C4.74475 8.00011 4.66789 8.03345 4.60113 8.10034L4.10024 8.60131C4.03334 8.66806 4 8.74492 4 8.83179C4 8.91858 4.03345 8.99544 4.10024 9.06219L8.76957 13.7316C8.83633 13.7984 8.91322 13.8318 9.00005 13.8318C9.08688 13.8318 9.16364 13.7984 9.23036 13.7316L13.9001 9.06219C13.9668 8.99541 14 8.91854 14 8.83179C14 8.74492 13.9668 8.66806 13.9001 8.60117Z"
                fill="#ADBFDF"
              />
            </svg>
          </li>
          <li className="filter-calls__filters-list-item">
            <button className="filter-calls__filters-list-button">
              Все звонки
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
            >
              <path
                d="M13.9001 8.60117L13.3991 8.10024C13.3324 8.03334 13.2555 8 13.1685 8C13.0818 8 13.0049 8.03334 12.9382 8.10024L9.00005 12.0382L5.06209 8.10034C4.9953 8.03345 4.91844 8.00011 4.83161 8.00011C4.74475 8.00011 4.66789 8.03345 4.60113 8.10034L4.10024 8.60131C4.03334 8.66806 4 8.74492 4 8.83179C4 8.91858 4.03345 8.99544 4.10024 9.06219L8.76957 13.7316C8.83633 13.7984 8.91322 13.8318 9.00005 13.8318C9.08688 13.8318 9.16364 13.7984 9.23036 13.7316L13.9001 9.06219C13.9668 8.99541 14 8.91854 14 8.83179C14 8.74492 13.9668 8.66806 13.9001 8.60117Z"
                fill="#ADBFDF"
              />
            </svg>
          </li>
          <li className="filter-calls__filters-list-item">
            <button className="filter-calls__filters-list-button">
              Все источники
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
            >
              <path
                d="M13.9001 8.60117L13.3991 8.10024C13.3324 8.03334 13.2555 8 13.1685 8C13.0818 8 13.0049 8.03334 12.9382 8.10024L9.00005 12.0382L5.06209 8.10034C4.9953 8.03345 4.91844 8.00011 4.83161 8.00011C4.74475 8.00011 4.66789 8.03345 4.60113 8.10034L4.10024 8.60131C4.03334 8.66806 4 8.74492 4 8.83179C4 8.91858 4.03345 8.99544 4.10024 9.06219L8.76957 13.7316C8.83633 13.7984 8.91322 13.8318 9.00005 13.8318C9.08688 13.8318 9.16364 13.7984 9.23036 13.7316L13.9001 9.06219C13.9668 8.99541 14 8.91854 14 8.83179C14 8.74492 13.9668 8.66806 13.9001 8.60117Z"
                fill="#ADBFDF"
              />
            </svg>
          </li>
          <li className="filter-calls__filters-list-item">
            <button className="filter-calls__filters-list-button">
              Все оценки
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
            >
              <path
                d="M13.9001 8.60117L13.3991 8.10024C13.3324 8.03334 13.2555 8 13.1685 8C13.0818 8 13.0049 8.03334 12.9382 8.10024L9.00005 12.0382L5.06209 8.10034C4.9953 8.03345 4.91844 8.00011 4.83161 8.00011C4.74475 8.00011 4.66789 8.03345 4.60113 8.10034L4.10024 8.60131C4.03334 8.66806 4 8.74492 4 8.83179C4 8.91858 4.03345 8.99544 4.10024 9.06219L8.76957 13.7316C8.83633 13.7984 8.91322 13.8318 9.00005 13.8318C9.08688 13.8318 9.16364 13.7984 9.23036 13.7316L13.9001 9.06219C13.9668 8.99541 14 8.91854 14 8.83179C14 8.74492 13.9668 8.66806 13.9001 8.60117Z"
                fill="#ADBFDF"
              />
            </svg>
          </li>
          <li className="filter-calls__filters-list-item">
            <button className="filter-calls__filters-list-button">
              Все ошибки
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
            >
              <path
                d="M13.9001 8.60117L13.3991 8.10024C13.3324 8.03334 13.2555 8 13.1685 8C13.0818 8 13.0049 8.03334 12.9382 8.10024L9.00005 12.0382L5.06209 8.10034C4.9953 8.03345 4.91844 8.00011 4.83161 8.00011C4.74475 8.00011 4.66789 8.03345 4.60113 8.10034L4.10024 8.60131C4.03334 8.66806 4 8.74492 4 8.83179C4 8.91858 4.03345 8.99544 4.10024 9.06219L8.76957 13.7316C8.83633 13.7984 8.91322 13.8318 9.00005 13.8318C9.08688 13.8318 9.16364 13.7984 9.23036 13.7316L13.9001 9.06219C13.9668 8.99541 14 8.91854 14 8.83179C14 8.74492 13.9668 8.66806 13.9001 8.60117Z"
                fill="#ADBFDF"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterCalls;
