import { Helmet } from 'react-helmet'

const HelmetCustom = ({
   title = 'YouTube using YouTube',
   description = 'a project made with youtube api and react',
}) => {
   return (
      <Helmet>
         <title>{title}</title>
         <meta name='description' content={description} />
         <meta property='og:locale' content='en_US' />
         <meta property='og:type' content='website' />
         <meta property='og:title' content={title} />
         <meta property='og:description' content={description} />
         <link
            rel='icon'
            href='https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg'
         />
      </Helmet>
   )
}

export default HelmetCustom
