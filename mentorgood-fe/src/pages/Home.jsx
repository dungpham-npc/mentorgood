import Header from '../components/Header'
import MentorList from '../components/MentorList'
import SearchBar from '../components/SearchBar'
import Suggestions from '../components/Suggestions'

export default function Home() {
  return (
    <>
        <Header/>
        <SearchBar/>
        <Suggestions/>
        <MentorList/>
    </>
  )
}
