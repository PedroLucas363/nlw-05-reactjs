// SPA - Single Page Applicaion
// SSR - Server Side Rendering
// SSG - Static Side Generetion

//useEffect(()=>{}, [variavel]) -> dispara sempre que o valor da variável é alterado
//useEffect(()=>{}, []) -> dispara apenas quando o componente é exibido na tela

//yarn build -> gera um build do projeto
//yarn start -> sobe um servidor como se fosse em prod (já estático)
//yarn dev -> sobe um servidor de desenvolvimento

export default function Home(props) {
  console.log(props.episodes)

  return (
    <h1>
      {JSON.stringify(props.episodes)}
    </h1>
    )
}

export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  
  return {
    props: {
      episodes:data,
    },
    revalidate: 60 * 60 * 8,
  }
}