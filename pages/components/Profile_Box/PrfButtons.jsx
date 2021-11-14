import MakeVc from "./MakeVc"

const PrfButtons = (props) => {
  return (
    <MakeVc Category={"自己紹介"} PrfButtons VcState={props.VcState} SetVcState={props.SetVcState} Play={props.Play} />
  )
}
export default PrfButtons