
import CustomCard from '@/components/CustomCard'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import TextCard from '@/components/TextList'
import { getAllTexts } from '@/lib/actions/textStore.action'


export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tabs defaultValue="writer" className="w-[400px]" aria-label="Tabs group">
        <TabsList className="grid w-full grid-cols-2" aria-label="Tabs buttons">
          <TabsTrigger value="writer">Writer</TabsTrigger>
          <TabsTrigger value="publisher">Publisher</TabsTrigger>
        </TabsList>
        <TabsContent value="writer">
          <CustomCard type="writer" />
        </TabsContent>
        <TabsContent value="publisher">
          <CustomCard type="publisher" />
        </TabsContent>
      </Tabs>

      
    </main>
  )
}
