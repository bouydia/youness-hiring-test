import CustomContent from '@/components/CustomContent'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-6 px-24">
      <Tabs defaultValue="writer" className="w-[1200px]" aria-label="Tabs group">
        <TabsList className="grid w-full grid-cols-2" aria-label="Tabs buttons">
          <TabsTrigger value="writer">Writer</TabsTrigger>
          <TabsTrigger value="publisher">Publisher</TabsTrigger>
        </TabsList>
        <TabsContent value="writer">
          <CustomContent type="writer" />
        </TabsContent>
        <TabsContent value="publisher">
          <CustomContent type="publisher" />
        </TabsContent>
      </Tabs>

      
    </main>
  )
}
