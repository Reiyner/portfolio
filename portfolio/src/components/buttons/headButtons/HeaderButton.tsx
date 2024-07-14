import { NavLink } from "react-router-dom";
import "./headButton.scss";

export default function HeaderButton(props: headButton) {
  return (
    <NavLink
      to={props.to}
      className={`HeadButton${props.id}`}
      style={({
        isActive,
        isPending,
        isTransitioning,
      }: {
        isActive: boolean;
        isPending: boolean;
        isTransitioning: boolean;
      }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          textDecoration: isActive ? "underline" : "",
          color: isPending ? "red" : "black",
          className: isTransitioning ? "transition" : "",
        };
      }}
    >
      {props.name}
    </NavLink>
  );
}
