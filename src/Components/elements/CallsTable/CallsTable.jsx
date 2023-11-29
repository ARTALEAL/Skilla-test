import CheckBox from '../CheckBox/CheckBox';
import './callsTable.css';

function CallsTable({ data }) {
  return (
    <table className="calls-table">
      <thead>
        <tr className="calls-table__header-row">
          <th className="calls-table__header-item calls-table__header-item-checkbox">
            <CheckBox />
          </th>
          <th className="calls-table__header-item calls-table__header-item-type">
            Тип
          </th>
          <th className="calls-table__header-item calls-table__header-item-time">
            Время
          </th>
          <th className="calls-table__header-item calls-table__header-item-employee">
            Сотрудник
          </th>
          <th className="calls-table__header-item calls-table__header-item-call">
            Звонок
          </th>
          <th className="calls-table__header-item calls-table__header-item-from">
            Источник
          </th>
          <th className="calls-table__header-item calls-table__header-item-rating">
            Оценка
          </th>
          <th className="calls-table__header-item">Длительность</th>
        </tr>
      </thead>
      <tbody>
        {data.map((call) => {
          return (
            <tr className="calls-table__row">
              <td className="calls-table__header-item-checkbox">
                <CheckBox />
              </td>
              <td className="calls-table__header-item-type">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z"
                    fill="#005FF8"
                  />
                </svg>
              </td>
              <td className="calls-table__header-item-time">12:30</td>
              <td className="calls-table__header-item-employee">123</td>
              <td className="calls-table__header-item-call">
                +7(921)999-99-99
              </td>
              <td className="calls-table__header-item-from">Работа работа</td>
              <td className="calls-table__header-item-rating">122133</td>
              <td>12:06</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CallsTable;
