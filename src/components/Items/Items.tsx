import CharacterContext from "context/CharacterContext"
import React, { useContext } from "react"
import { Subtitle, Table } from "styled_components"

const Items: React.FC = () => {
  const context = useContext(CharacterContext)
  const { character } = context
  const { items } = character
  const maxItemSlots = character.itemSlots
  const itemSlotsUsed = character.items.reduce(
    (acc, curr) => acc + curr.slots,
    0
  )

  return (
    <>
      <Subtitle>Items</Subtitle>
      <p data-testid="item-slots-used">
        {`Item Slots Used: ${itemSlotsUsed}/${maxItemSlots}`}
      </p>
      <Table>
        <thead>
          <tr role="row">
            <th role="cell">Item</th>
            <th role="cell">Defense</th>
            <th role="cell">Damage</th>
            <th role="cell">Slots</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: any, idx) => (
            <ItemRow item={item} key={item.name + idx} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

interface IItem {
  count: number
  name: string
  defense?: number
  damage?: number
  slots: number
}
interface IItemRowProps {
  item: IItem
}

const ItemRow: React.FC<IItemRowProps> = ({ item }) => {
  return (
    <tr data-testid={`${item.name.toLowerCase()}-row`} role="row">
      <td role="cell">{item.name}</td>
      <td role="cell">{item.defense ? item.defense : "-"}</td>
      <td role="cell">{item.damage ? item.damage : "-"}</td>
      <td role="cell">{item.slots}</td>
    </tr>
  )
}

export default Items
