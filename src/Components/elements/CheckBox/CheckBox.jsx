import './checkbox.css';

function CheckBox() {
  return (
    <label className="checkbox__label">
      <input type="checkbox" className="checkbox" />
      <span></span>
    </label>
  );
}

export default CheckBox;
