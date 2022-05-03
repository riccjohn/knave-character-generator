import { Meta, Story } from "@storybook/react"
import { Table } from "."

export default {
  component: Table,
  title: "StyledComponents/Table",
} as Meta

const Template: Story = () => {
  return (
    <Table>
      <thead>
        <tr role="row">
          <th role="cell" data-testid="item-name-heading">
            Item
          </th>
          <th role="cell" data-testid="item-defense-heading">
            Defense
          </th>
          <th role="cell" data-testid="item-damage-heading">
            Damage
          </th>
          <th role="cell" data-testid="item-slots-heading">
            Slots
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>foo</td>
          <td>10</td>
          <td>-</td>
          <td>1</td>
        </tr>
        <tr>
          <td>bar</td>
          <td>-</td>
          <td>1d6</td>
          <td>3</td>
        </tr>
        <tr>
          <td>baz</td>
          <td>-</td>
          <td>1d4</td>
          <td>2</td>
        </tr>
      </tbody>
    </Table>
  )
}

export const Primary = Template.bind({})
