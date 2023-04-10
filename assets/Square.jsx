export const Square = (props) => {
  props.callback(props.position);
  return (
    <mesh
      position={props.plane ? [0, -5, 0] : props.position}
      scale={props.plane ? [80, 1, 70] : [2.8, 5, 1]}
    >
      <boxGeometry/>
      <meshStandardMaterial
        color={props.plane ? "white" : "red"}
      />
    </mesh>
  );
};
