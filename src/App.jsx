import './App.css'
import styled from 'styled-components'
import { Title } from './components/Title'
import { Flex } from './components/Flex'
import { Console } from './components/Console'
import { Button } from './components/Button'

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background: black;
`

function App() {
    return (
        <AppWrapper>
            <Flex justify="center">
                <Title color="#77dd77">Console 2022</Title>
            </Flex>
            <Flex direction="column" margin="10px 0">
                <Console />
                <Button outlined color="#77dd77" align="flex-end">
                    Отправить
                </Button>
            </Flex>
        </AppWrapper>
    )
}

export default App
