"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ClipboardCopy, Code, Palette, Zap, Shield, Layers, Sparkles, Search, Github, Twitter, Download, Star, Users, Play, Eye, Settings, Copy, Check } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const componentsList = [
  {
    name: "Button",
    description: "Versatile button component with multiple variants including primary, secondary, outline, and ghost styles.",
    usage: `import { Button } from '@/components/ui/button';\n\n<Button variant='primary'>Click Me</Button>`,
    icon: Zap,
    category: "Interactive",
    downloads: "10.2k",
    stars: "4.8",
    demo: (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
    )
  },
  {
    name: "Card",
    description: "Elegant card component for displaying content in organized, bordered containers.",
    usage: `import { Card, CardContent } from '@/components/ui/card';\n\n<Card><CardContent>Content</CardContent></Card>`,
    icon: Layers,
    category: "Layout",
    downloads: "8.5k",
    stars: "4.9",
    demo: (
      <Card className="w-full max-w-sm">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-2">Sample Card</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This is a sample card component with some content to demonstrate its usage.
          </p>
          <Button size="sm">Action</Button>
        </CardContent>
      </Card>
    )
  },
  {
    name: "Theme Toggle",
    description: "Beautiful dark/light mode toggle with smooth animations and gradient effects.",
    usage: `import { ThemeToggle } from '@/components/ui/theme-toggle';\n\n<ThemeToggle />`,
    icon: Palette,
    category: "Interactive",
    downloads: "12.1k",
    stars: "4.7",
    demo: (
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <span className="text-sm text-muted-foreground">Try clicking the toggle!</span>
      </div>
    )
  },
  {
    name: "Input",
    description: "Modern input component with focus states and validation support.",
    usage: `import { Input } from '@/components/ui/input';\n\n<Input placeholder="Enter text..." />`,
    icon: Code,
    category: "Form",
    downloads: "9.3k",
    stars: "4.6",
    demo: (
      <div className="space-y-4 w-full max-w-sm">
        <Input placeholder="Enter your name..." />
        <Input placeholder="Enter your email..." type="email" />
        <Input placeholder="Enter your password..." type="password" />
      </div>
    )
  },
  {
    name: "Badge",
    description: "Compact badge component for labels, status indicators, and notifications.",
    usage: `import { Badge } from '@/components/ui/badge';\n\n<Badge variant="default">New</Badge>`,
    icon: Shield,
    category: "Display",
    downloads: "7.8k",
    stars: "4.5",
    demo: (
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge className="bg-secondary text-secondary-foreground">Secondary</Badge>
        <Badge className="border text-foreground">Outline</Badge>
        <Badge className="bg-destructive text-destructive-foreground">Destructive</Badge>
      </div>
    )
  },
  {
    name: "Alert",
    description: "Alert component for displaying important messages with different severity levels.",
    usage: `import { Alert } from '@/components/ui/alert';\n\n<Alert>Important message</Alert>`,
    icon: Sparkles,
    category: "Feedback",
    downloads: "6.9k",
    stars: "4.4",
    demo: (
      <div className="space-y-3 w-full">
        <Alert>
          <AlertDescription>
            This is a default alert message for important information.
          </AlertDescription>
        </Alert>
        <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
          <AlertDescription>
            This is a success alert message.
          </AlertDescription>
        </Alert>
      </div>
    )
  }
];

export default function DevComponentsShowcase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedComponent, setSelectedComponent] = useState<number | null>(null);
  const [showDemo, setShowDemo] = useState(false);
  const [copiedCode, setCopiedCode] = useState<number | null>(null);
  
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const categories = ["All", "Interactive", "Layout", "Form", "Display", "Feedback"];
  
  const filteredComponents = componentsList.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">DevComponents</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://github.com/shradha-2022', '_blank')}
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://x.com/shradhacg', '_blank')}
                >
                  <Twitter className="w-4 h-4" />
                  <span className="hidden sm:inline">Twitter</span>
                </Button>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:30px_30px] animate-pulse"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-60 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-80 right-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-32 left-2/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-purple-100/20 dark:from-blue-900/20 dark:to-purple-900/20"></div>
          
          {/* Animated Circles */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Developer Components Library
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of beautifully crafted, reusable React components designed to accelerate your development workflow. 
              Built with modern design principles and full dark mode support.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300">
              Get Started
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-3">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">54.8k</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">4.8</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-3">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">{componentsList.length}</div>
              <div className="text-sm text-muted-foreground">Components</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">2.1k</div>
              <div className="text-sm text-muted-foreground">Developers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Interactive Components
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Try our components live! Click on any component to see it in action
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredComponents.map((component, idx) => {
              const IconComponent = component.icon;
              return (
                <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 border-border bg-card hover:scale-105 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-card-foreground">{component.name}</h3>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {component.category}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          {component.stars}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {component.downloads}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {component.description}
                    </p>

                    {/* Interactive Demo Section */}
                    <div className="mb-4 p-4 bg-muted/50 rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Play className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedComponent(selectedComponent === idx ? null : idx)}
                          className="h-6 px-2 text-xs"
                        >
                          {selectedComponent === idx ? 'Hide' : 'Try It'}
                        </Button>
                      </div>
                      
                      {selectedComponent === idx && (
                        <div className="space-y-3">
                          {component.demo}
                          <div className="pt-3 border-t border-border">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">Interactive Preview</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => copyToClipboard(component.usage, idx)}
                                className="h-6 px-2 text-xs"
                              >
                                {copiedCode === idx ? (
                                  <>
                                    <Check className="w-3 h-3 mr-1" />
                                    Copied!
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3 mr-1" />
                                    Copy Code
                                  </>
                                )}
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto border border-border">
                        <code className="text-muted-foreground">{component.usage}</code>
                      </pre>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(component.usage, idx)}
                        className="w-full flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white"
                      >
                        {copiedCode === idx ? (
                          <>
                            <Check size={16} /> Code Copied!
                          </>
                        ) : (
                          <>
                            <ClipboardCopy size={16} /> Copy Code
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {filteredComponents.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No components found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">DevComponents</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Built with ❤️ and modern web technologies
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={() => window.open('https://github.com/shradha-2022', '_blank')}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={() => window.open('https://x.com/shradhacg', '_blank')}
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Created by <span className="font-semibold text-foreground">Shradha Guttedar</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 