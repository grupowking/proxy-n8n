import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/pergunta', async (req, res) => {
  try {
    const { pergunta } = req.body

    const resposta = await axios.post(
      'https://grupowking.app.n8n.cloud/webhook/SEU-WEBHOOK-ID',
      { pergunta }
    )

    res.json(resposta.data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ erro: 'Erro ao enviar pro n8n', detalhe: err.message })
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Proxy rodando na porta ${port}`)
})
