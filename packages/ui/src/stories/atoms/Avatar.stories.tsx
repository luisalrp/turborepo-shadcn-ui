import { Meta } from '@storybook/react'
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Shadcn/Avatar',
  component: Avatar,
}

export const Default = () => (
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
)

Default.storyName = 'Default'

export default meta