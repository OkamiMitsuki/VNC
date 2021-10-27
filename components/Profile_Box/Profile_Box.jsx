import GetPrf from "./GetPrf"
const Profile_Box = () => {
  return (
    <div>
      <ul>
        <li> <GetPrf txt={`first_name_en`} /> <GetPrf txt={`last_name_en`} /> </li>
        <li> <GetPrf txt={`first_name_jp`} /> <GetPrf txt={`last_name_jp`} /> </li>
      </ul>
      <GetPrf txt={`mark`} />
    </div>
  )
}

export default Profile_Box