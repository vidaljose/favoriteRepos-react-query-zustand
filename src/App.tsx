import Card from "./components/Card"
import { Repository } from "./hooks/types"
import { useFetchRepositories } from "./hooks/useRepos"
import { useFavoriteReposStore } from "./store/favoriteRepos"

export const App = () => {
  const { data, isLoading } = useFetchRepositories()
  const {favoriteReposIds} = useFavoriteReposStore()

  if (isLoading) return <div>Loading...</div>
  console.log(data)
  console.log(favoriteReposIds)

  return (
    <h3>
      {data?.map(repo => (
        <div key={repo.id}>
          <Card 
          repository={repo} 
          isFavorite={favoriteReposIds.includes(repo.id)} 
          />
        </div>
      ))}
    </h3>
  )
}