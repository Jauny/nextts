import Head from 'next/head'

export default ({title = 'Bump'}) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/css?family=Varela" rel="stylesheet" />
      <link rel="stylesheet" href="/static/css/react-phone-number-input/style.css" />
    </Head>
  </div>
)
