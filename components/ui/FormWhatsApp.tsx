'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FormWhatsApp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const telefone = '';

    const texto = `Olá, meu nome é ${nome}.%0AEmail: ${email}%0AAssunto: ${assunto}%0AMensagem: ${mensagem}`;

    const linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURI(texto)}`;
    window.open(linkWhatsApp, '_blank');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Envie uma mensagem</CardTitle>
        <CardDescription>
          Preencha o formulário e entraremos em contato em breve
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <Input
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Input
            placeholder="Assunto"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
          />
          <Textarea
            placeholder="Sua mensagem"
            rows={4}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
          >
            Enviar Mensagem
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
