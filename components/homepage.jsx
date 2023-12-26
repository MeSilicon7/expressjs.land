import Link from 'next/link'
import styles from './homepage.module.css'
import { Cards, Card } from 'nextra/components'

export default function Homepage() {
  return (
    <div>
      <h1 className={styles.testtext}>Dive into the World of Server-Side Magic</h1>

        <div className={styles.containerButton}>
            <Link href="/learn/0-intro" className={styles.buttonPrimary}>Learn</Link>
            <Link href="/learn/0-intro" className="button">Say Hello!</Link> 
        </div>

        <Cards className={styles.cards}>
            <Card icon='🌏' title="RestAPI" href="#" />
            <Card icon='🗝️' title="OAuth 2.0 Proiver" href="#" />
            <Card icon='🧨' title="SSE" href="#" />
            <Card icon='🔏' title="OpenID Connect" href="#" />
            <Card icon='🗾' title="GraphQL" href="#" />
            <Card icon='🐬' title="MYSQL" href="#" />
            <Card icon='🪝' title="Webhook" href="#" />
            <Card icon='💳' title="RBAC" href="#" />
            <Card icon='🍁' title="Memoryleak test" href="#" />
        </Cards>

    </div>
  )
}