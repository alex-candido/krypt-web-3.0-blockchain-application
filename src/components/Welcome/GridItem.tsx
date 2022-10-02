interface GridItemProps {
  properties: string;
  child: string;
}

const GridItem = ({properties, child}: GridItemProps) => {
  return (
    <div className={properties}>{child}</div>
  )
}

export default GridItem;