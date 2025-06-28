import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import FormWhatsApp from "@/components/ui/FormWhatsApp"
import {
  Code2,
  Users,
  Heart,
  Sparkles,
  Instagram,
  Mail,
  MapPin,
  Calendar,
  BookOpen,
  Lightbulb,
  Star,
  ArrowRight,
  Github,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import logoMeninasDigitais from "@/public/logoMeninasDigitais.png"
import logoUnit from "@/public/logoUnit.png"
import imageGrupoMeninasLicode from "@/public/imageGrupoMeninasLicode.jpeg"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
              <Image
                src={logoUnit}
                alt="Logo Unit"
                width={80}
                height={80}
                className="w-30 h-16 object-contain"
              />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              LICODE
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#sobre" className="text-gray-700 hover:text-pink-600 transition-colors">
              Sobre
            </Link>
            <Link href="#projetos" className="text-gray-700 hover:text-pink-600 transition-colors">
              Projetos
            </Link>
            <Link href="#equipe" className="text-gray-700 hover:text-pink-600 transition-colors">
              Equipe
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-pink-600 transition-colors">
              Contato
            </Link>
          </nav>

        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Code2 className="w-12 h-12 text-white" />
            </div>
            <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-200">
              <Sparkles className="w-4 h-4 mr-1" />
              Ladies in Code
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Empoderamento
            <br />
            <span className="text-4xl md:text-6xl">através da Tecnologia</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A Licode é uma liga acadêmica da Universidade Tiradentes que conecta, inspira e capacita mulheres na área de computação, criando um
            ambiente acolhedor para o crescimento profissional e pessoal na tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-lg px-8 py-3"
            >
            <Link className="flex flex-row items-center" href="https://discord.gg/3DqKPjae" target="_blank" rel="noopener noreferrer">
            Saiba Mais
            <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="additional-classes"
            >
              <Link className="flex flex-row items-center" href="https://instagram.com/li.code" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                Siga-nos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="sobre" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700">
              <Heart className="w-4 h-4 mr-1" />
              Nossa Missão
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Quem Somos?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos uma liga acadêmica formada por mulheres do Nordeste de Sergipe, com a missão de incentivar o aprendizado, o empoderamento e a inovação no campo da tecnologia. 
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Construindo o futuro da tecnologia com diversidade
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A Licode nasceu da necessidade de criar um espaço seguro e inspirador para mulheres na computação.
                Acreditamos que a diversidade é fundamental para a inovação tecnológica e trabalhamos para quebrar
                barreiras e estereótipos.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">100+</div>
                  <div className="text-sm text-gray-600">Membras Ativas</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">SBC</div>
                  <div className="text-sm text-gray-600">Parceiras Meninas Digitais</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl h-96 flex items-center justify-center">
              <Image
                src={imageGrupoMeninasLicode}
                alt="imagem Grupo Meninas Licode"
                className="rounded-md w-180 h-90"
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parceria Meninas Digitais */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-700">
                  <Heart className="w-4 h-4 mr-1" />
                  Parceria Oficial
                </Badge>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  Orgulhosamente parceiras do
                  <br />
                  <span className="text-blue-600">Meninas Digitais</span>
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  O programa Meninas Digitais é uma iniciativa da Sociedade Brasileira de Computação (SBC) que visa
                  despertar o interesse de meninas do ensino médio e fundamental para a área de Computação e suas
                  tecnologias.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Através desta parceria, desenvolvemos ações conjuntas para ampliar a participação feminina na
                  tecnologia, desde a educação básica até o ensino superior, criando uma rede de apoio contínua.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="https://meninas.sbc.org.br/" target="_blank" rel="noopener noreferrer">
                      Conheça o Programa
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 max-w-sm w-full">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Image
                        src={logoMeninasDigitais}
                        alt="Logo Meninas Digitais"
                        width={80}
                        height={80}
                        className="w-30 h-30 object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">Meninas Digitais</h4>
                    <p className="text-sm text-gray-600 mb-4">Sociedade Brasileira de Computação</p>
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-blue-600">500+</div>
                        <div className="text-xs text-gray-600">Projetos Ativos</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-purple-600">Nacional</div>
                        <div className="text-xs text-gray-600">Alcance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos e Atividades */}
      <section id="projetos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">
              <Lightbulb className="w-4 h-4 mr-1" />
              Nossas Atividades
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Projetos e Atividades</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvemos iniciativas que promovem o aprendizado e networking
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-pink-100 hover:border-pink-200">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className="text-pink-700">Workshops Técnicos</CardTitle>
                <CardDescription>
                  Sessões práticas sobre desenvolvimento web, mobile, IA e outras tecnologias emergentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    UI/UX
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">Workshops mensais com foco em tecnologias atuais do mercado</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-purple-100 hover:border-purple-200">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-700">Programa de Mentoria</CardTitle>
                <CardDescription>Conexão entre estudantes e profissionais experientes da área tech</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Carreira
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Networking
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Crescimento
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">Acompanhamento personalizado para desenvolvimento profissional</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100 hover:border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-700">Eventos de Networking</CardTitle>
                <CardDescription>Encontros para fortalecer a comunidade e criar conexões profissionais</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Meetups
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Palestras
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Hackathons
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">Eventos regulares para fortalecer nossa comunidade</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galeria/Instagram Feed */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-100 text-pink-700">
              <Instagram className="w-4 h-4 mr-1" />
              Nossa Comunidade
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Momentos Especiais</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acompanhe nossos eventos e atividades no Instagram @li.code
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Momento ${i}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 bg-transparent">
              <Link href="https://instagram.com/li.code" className="flex flex-row" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                Ver mais no Instagram
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Equipe Organizadora */}
      <section id="equipe" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700">
              <Star className="w-4 h-4 mr-1" />
              Nossa Liderança
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Equipe Organizadora</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as mulheres que lideram e inspiram nossa comunidade
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Stheffany Santos", role: "Presidente", area: "Desenvolvimento Web" },
              { name: "Rayellen", role: "Vice-Presidente", area: "Pesquisa Cientifica" },
              { name: "Helena Carvalho", role: "Diretora de Pesquisa", area: "Pesquisa Cientifica" },
              { name: "Carla Oliveira", role: "Diretora de Projetos", area: "Desenvolvimento Web" },
            ].map((member, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src={`/placeholder.svg?height=96&width=96`}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
                  <p className="text-pink-600 font-medium">{member.role}</p>
                  <p className="text-sm text-gray-600 mt-1">{member.area}</p>
                  <div className="flex justify-center space-x-2 mt-4">
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">
              <Mail className="w-4 h-4 mr-1" />
              Fale Conosco
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tem dúvidas ou quer participar? Estamos aqui para ajudar!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Nos encontre</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-gray-600">@li.code</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-gray-600">contato@licode.org</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-gray-600">Universidade Tiradentes</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <FormWhatsApp/>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Licode</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empoderando mulheres na tecnologia através da educação, mentoria e comunidade.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#sobre" className="hover:text-pink-400 transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#projetos" className="hover:text-pink-400 transition-colors">
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link href="#equipe" className="hover:text-pink-400 transition-colors">
                    Equipe
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="hover:text-pink-400 transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Atividades</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Workshops</li>
                <li>Mentoria</li>
                <li>Networking</li>
                <li>Hackathons</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="w-8 h-8 p-0 text-gray-400 hover:text-pink-400">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="w-8 h-8 p-0 text-gray-400 hover:text-pink-400">
                  <Mail className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="w-8 h-8 p-0 text-gray-400 hover:text-pink-400">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Licode - Ladies in Code. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
