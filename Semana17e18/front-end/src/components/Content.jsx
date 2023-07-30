import { useState, useEffect } from 'react'
import refugionerdolasImg from '../assets/refugionerdolas.svg'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'

import Axios from 'axios'

import styles from '../styles/content.module.css'

export function Content() {
  const [repositories, setRepositories] = useState([])
  const [obra, setObra] = useState('')
  const [sinopse, setsinopse] = useState('')
  const [opiniao, setOpiniao] = useState('')
  const [imagem, setImagem] = useState('')
  const [success, setSuccess] = useState(false)
  const baseURL = 'https://meumanhwa-backend.onrender.com/manhwas'

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(baseURL)
      setRepositories(response.data)
    }
    getData()
  }, [])

  function handleInputValueObra(event) {
    setObra(event.target.value)
  }

  function handleInputValuesinopse(event) {
    setsinopse(event.target.value)
  }

  function handleInputValueImagem(event) {
    setImagem(event.target.value)
  }

  function handleInputValueOpiniao(event) {
    setOpiniao(event.target.value)
  }

  function handleCreateMessage(event) {
    event.preventDefault()

    console.log('mensagem enviada', obra, opiniao, sinopse, imagem)

    async function sendData() {
      await Axios.post(baseURL, {
        obra: obra,
        opiniao: opiniao,
        sinopse: sinopse,
        imagem: imagem
      })
      const response = await Axios.get(baseURL)
      setRepositories(response.data)
    }
    sendData()

    setSuccess(true)
    setObra('')
    setsinopse('')
    setImagem('')
    setOpiniao('')
  }

  return (
    <>
      <Header
        title='Meu Manhwa'
        subtitle='Não sabe qual manhwa, webtoon ou manga ler?'
        image={refugionerdolasImg}
        p='Siga o @refugionerdolas nas redes sociais'
      />
      <div className={styles.projectsContainer}>
        <div className={styles.projectsContainer}>
          <div className={styles.cardsRepoContainer}>
            {repositories.map((repo) => {
              return(
                <div key={repo._id} className={styles.cardRepo}>
                <div className={styles.cardImgContainer}>
                  <img className={styles.cardRepoImage} src={repo.imagem} />
                </div>
                <details>
                  <summary className={styles.cardRepoSummary}>
                    {repo.obra}
                  </summary>
                  <p className={styles.cardRepoText}>{repo.sinopse}</p>
                  <q className={styles.cardRepoQuote}>{repo.opiniao}</q>
                </details>
              </div>
              )
            })}
          </div>
        </div>
      </div>
      <div >
        <h2 className={styles.projectsTitle}>Faça uma indicação de outros manhwas:</h2>
        <form  className={styles.form} onSubmit={handleCreateMessage}>
          <input 
            onChange={handleInputValueObra} 
            placeholder="Digite o nome da obra"
            value={obra}
            className={styles.formInput}
          />
          <textarea 
            onChange={handleInputValueImagem} 
            placeholder="Digite o link de uma imagem da obra"
            value={imagem}
            className={styles.formTextArea}
          />
          <textarea 
            onChange={handleInputValuesinopse} 
            placeholder="Digite a sinopse da obra"
            value={sinopse}
            className={styles.formTextArea}
          />
          <textarea 
            onChange={handleInputValueOpiniao} 
            placeholder="Digite sua opinião sobre a obra"
            value={opiniao}
            className={styles.formTextArea}
          />
          <button className={styles.formButton} type="submit">Indicar Obra</button>
          {success && <p>obrigada pela indicação e não esqueça de seguir o Refugio Nerdolas nas redes sociais</p>}
        </form>
      </div>
      <Footer />
    </>
  )
}
