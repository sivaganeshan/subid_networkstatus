### `Sub_id_Network_status`

#### `Requirement`

We have a dapp: sub.id . There are many connections to different blockchain networks and in order to always be aware of which ones work, we would like the page with the status of connections.

Each connection to the network should be represented as a green or red rectangle
green - connected
red - disconnected

To do this, you need to pull out all the chains along this path:

https://app.subsocial.network/subid/api/v1/chains/properties

Sort all networks that have tokenSymbol and tokenDecimal. And display them on the screen with a tile, with a name and an icon.

The icon can be reached along the following path:
https://sub.id/images/:icon

For example:
https://sub.id/images/bifrost.svg

And check the status of the connection every 5 minutes along this path:
https://app.subsocial.network/subid/api/v1/check/:network

For example:
https://app.subsocial.network/subid/api/v1/check/kusama

Also consider mobile friendly, use styled components , and MUI or Ant design

#### `How to Run`

1. Checkout code and install all required dependencies `npm run install`
2. To run `npm run start` , code will run at localhost:3000

Deployed Url: `http://subid-networkstatus.vercel.app/`

Video demo : `https://www.dropbox.com/s/49b0p3kqmztehpw/subid_networstatus.mov?dl=0`

#### `Story Book`

This single page application doesn't have any actionable componenets, it has read only components.

To run the story book do the following:
1. install all required dependencies `npm run install`
2. To run `npm run storybook` , story book will run at localhost:6006

video demo: `https://www.dropbox.com/s/aus7f15tn5xueor/storyBook_subid_networkStatus.mov?dl=0`
