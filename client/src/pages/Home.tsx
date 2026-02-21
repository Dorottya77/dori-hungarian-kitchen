import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent("Pre-Order Inquiry from " + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:dorottya77@yahoo.com?subject=${subject}&body=${body}`;
    
    toast.success("Opening your email client...");
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(44, 24, 16, 0.5), rgba(44, 24, 16, 0.5)), url('https://files.manuscdn.com/user_upload_by_module/session_file/98733027/gHMrmnVuacmISTQQ.jpg')`
        }}
      >
        <div className="container text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Dori's Hungarian Kitchen
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Authentic Hungarian pastries baked with love in Cavendish, Vermont
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Pre-Order Now
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                From Hungary to Your Home
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                My name is <strong>Dorottya Klaszta</strong>, and I bring the authentic taste of Hungary to Vermont. 
                Every pastry I bake is made using traditional recipes passed down through generations—recipes that carry 
                the warmth of my homeland and the love of family.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                From the iconic <strong>Kürtőskalács</strong> (chimney cakes) to savory <strong>Pogácsa</strong> and 
                decadent <strong>Zserbó</strong>, each creation is handcrafted with care, using only the finest ingredients.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe that food is more than sustenance—it's a story, a memory, a connection. 
                Let me share mine with you.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/98733027/nCQkUwZXkPJGWMZO.jpg" 
                alt="Fresh Hungarian Chimney Cake"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pastries Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Our Signature Pastries
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/98733027/nCQkUwZXkPJGWMZO.jpg')`
              }}></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Kürtőskalács</h3>
                <p className="text-muted-foreground mb-4">
                  The iconic Hungarian chimney cake—crispy on the outside, soft and sweet on the inside. 
                  Rolled in cinnamon sugar, walnuts, or coconut.
                </p>
                <p className="text-primary font-bold text-lg">$10 each</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/98733027/TMuPNNnntlXTGDxf.jpg')`
              }}></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Pogácsa</h3>
                <p className="text-muted-foreground mb-4">
                  Traditional Hungarian savory scones, flaky and buttery. Perfect for breakfast or as a snack. 
                  Available in cheese, potato, or plain.
                </p>
                <p className="text-primary font-bold text-lg">$8 / half dozen</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/98733027/TMuPNNnntlXTGDxf.jpg')`
              }}></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Zserbó</h3>
                <p className="text-muted-foreground mb-4">
                  A decadent layered walnut cake with apricot jam and chocolate glaze. 
                  A true Hungarian classic for special occasions.
                </p>
                <p className="text-primary font-bold text-lg">$25 / whole cake</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            How to Order
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Choose Your Pastries</h3>
              <p className="text-muted-foreground">
                Browse our selection and decide what you'd like to order.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Pre-Order</h3>
              <p className="text-muted-foreground">
                Fill out the contact form below or email me directly. Orders require 48 hours notice.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Pick Up</h3>
              <p className="text-muted-foreground">
                Pick up your fresh pastries in Cavendish, VT. Payment accepted at pickup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-card">
        <div className="container max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
            Place Your Order
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ready to taste authentic Hungary? Fill out the form below and I'll get back to you within 24 hours.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Your Name *</Label>
              <Input 
                id="name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="message">What would you like to order? *</Label>
              <Textarea 
                id="message" 
                required 
                rows={5}
                placeholder="Please specify which pastries and quantities you'd like to order..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="mt-2"
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Send Order Inquiry
            </Button>
          </form>
          <p className="text-center text-muted-foreground mt-6">
            Or email me directly at <a href="mailto:dorottya77@yahoo.com" className="text-primary hover:underline font-bold">dorottya77@yahoo.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container text-center">
          <h3 className="text-3xl font-bold mb-4">Dori's Hungarian Kitchen</h3>
          <p className="text-lg mb-2">Cavendish, Vermont</p>
          <p className="mb-4">
            <a href="mailto:dorottya77@yahoo.com" className="hover:text-primary transition-colors">
              dorottya77@yahoo.com
            </a>
          </p>
          <p className="text-sm opacity-75">
            © 2026 Dori's Hungarian Kitchen. Baked with love.
          </p>
        </div>
      </footer>
    </div>
  );
}
