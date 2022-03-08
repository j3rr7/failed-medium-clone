import { connectToDatabase } from "../services/database";

export async function getServerSideProps(context) {
  try {
    const db = await connectToDatabase();
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function TestConnection({isConnected}) {
  return (
    <div>
      <h1>Test connection</h1>
      {isConnected ? <p>Connected to database</p> : <p>Not connected to database</p>}
    </div>
  )
}