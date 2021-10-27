import { names } from "../../datas/names"
const name_set = names.lamy
console.log(name_set)
const Name = () => {
  return (
    <div>
      <ul>
        <li> <h2>{name_set.first_name_en}</h2> <h2>{name_set.last_name_en}</h2> </li>
        <li> <h1>{name_set.first_name_jp}</h1> <h1>{name_set.last_name_jp}</h1> </li>
      </ul>
      <h3>{name_set.mark}</h3>
    </div>
  );
}

export default Name