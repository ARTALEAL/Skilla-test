import './filterCalls.css';

function FilterCalls() {
  return (
    <div className="filter-calls__container">
      <div className="filter-calls__input-container">
        <input
          type="tel"
          className="filter-calls__search-input"
          placeholder="Поиск по звонкам"
        />
      </div>
      <div className="filter-calls__filters-container">123</div>
    </div>
  );
}

export default FilterCalls;
