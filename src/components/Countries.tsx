import { FC } from 'react'
import { useQuery } from '@apollo/client'
import { GET_COUNTRIES } from '../queries'
import { CountriesData } from '../@types'

const Countries: FC = () => {
  const { loading, error, data } = useQuery<CountriesData>(GET_COUNTRIES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {data?.countries.slice(0, 25).map(country => (
          <li key={country.code}>
            {country.name} {country.emoji}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Countries
