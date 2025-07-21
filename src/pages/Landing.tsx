// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { Calendar, Shield, Heart, Award, Clock, Phone, MapPin, Mail, User, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getServiceCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['service-card-0', 'service-card-1', 'service-card-2', 'service-card-3'];
  return ids[index] || 'noID';
};

const getFeatureCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['feature-card-0', 'feature-card-1', 'feature-card-2', 'feature-card-3'];
  return ids[index] || 'noID';
};

const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: <Heart className="w-8 h-8 text-blue-500" />,
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments"
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-500" />,
      title: "Preventive Care",
      description: "Regular checkups and cleanings to maintain optimal oral health"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and smile makeovers for a confident smile"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
      title: "Restorative Care",
      description: "Crowns, bridges, and implants to restore function and appearance"
    }
  ];

  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      title: "Easy Scheduling",
      description: "Book appointments online or call our friendly staff"
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-500" />,
      title: "Flexible Hours",
      description: "Evening and weekend appointments available"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Insurance Accepted",
      description: "We work with most major insurance providers"
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: "Gentle Care",
      description: "Comfortable, pain-free treatments in a relaxing environment"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "25+" },
    { label: "Happy Patients", value: "5000+" },
    { label: "Procedures", value: "15000+" },
    { label: "Success Rate", value: "99%" }
  ];

  return (
    <Container componentId="landing-page-root">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with healthcare gradient background"
        className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-blue-100"
      >
      {/* Header */}
      <Header 
        devId="main-header" 
        devName="Main Header" 
        devDescription="Primary dental practice header with navigation"
        className="container mx-auto px-4 py-6"
      >
        <Nav 
          devId="main-nav" 
          devName="Main Navigation" 
          devDescription="Primary navigation bar for dental practice"
          className="flex items-center justify-between"
        >
          <Div 
            devId="logo-section" 
            devName="Logo Section" 
            devDescription="Dr. Miller dental practice logo and brand name"
            className="flex items-center space-x-2"
          >
            <Div devId="noID" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </Div>
            <Div devId="noID" className="flex flex-col">
              <Span 
                devId="brand-name" 
                devName="Brand Name" 
                devDescription="Dr. Miller Dental Practice brand name"
                className="text-xl font-bold text-gray-800"
              >
                Dr. Miller Dental
              </Span>
              <Span devId="noID" className="text-sm text-gray-600">Family Dentistry</Span>
            </Div>
          </Div>
          <Div 
            devId="nav-actions" 
            devName="Navigation Actions" 
            devDescription="Navigation buttons and user menu for dental practice"
            className="flex items-center space-x-4"
          >
            <Button 
              devId="services-button" 
              devName="Services Button" 
              devDescription="Link to dental services"
              variant="ghost" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </Button>
            <Button 
              devId="about-button" 
              devName="About Button" 
              devDescription="Link to about Dr. Miller"
              variant="ghost" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Button>
            {isAuthenticated ? (
              <Div 
                devId="user-section" 
                devName="User Section" 
                devDescription="Authenticated user welcome area for dental practice"
                className="flex items-center space-x-4"
              >
                <Span 
                  devId="welcome-message" 
                  devName="Welcome Message" 
                  devDescription="Welcome message for authenticated dental practice user"
                  className="text-gray-700"
                >
                  Welcome, {user?.name?.split(' ')[0]}!
                </Span>
                <Link to="/dashboard">
                  <Button 
                    devId="nav-dashboard-button"
                    devName="Navigation Dashboard Button"
                    devDescription="Dashboard button for dental practice management"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </Div>
            ) : (
              <Div 
                devId="auth-buttons" 
                devName="Authentication Buttons" 
                devDescription="Login and register buttons for dental practice"
                className="flex items-center space-x-2"
              >
                <Link to="/login">
                  <Button 
                    devId="nav-login-button"
                    devName="Navigation Login Button"
                    devDescription="Login button for dental practice staff"
                    variant="ghost" 
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Staff Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    devId="nav-register-button"
                    devName="Navigation Register Button"
                    devDescription="Book appointment button in navigation"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Book Appointment
                  </Button>
                </Link>
              </Div>
            )}
          </Div>
        </Nav>
      </Header>

      {/* Hero Section */}
      <Container componentId="hero-section">
        <Section 
          devId="hero-content" 
          devName="Hero Content" 
          devDescription="Main hero section for Dr. Miller dental practice"
          className="container mx-auto px-4 py-20 text-center"
        >
          <Div 
            devId="hero-content-wrapper" 
            devName="Hero Content Wrapper" 
            devDescription="Animated wrapper for dental practice hero content"
            className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <H1 
              devId="hero-title" 
              devName="Hero Title" 
              devDescription="Main hero title for Dr. Miller dental practice"
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            >
              Your Smile is Our 
              <Span 
                devId="priority-highlight" 
                devName="Priority Highlight" 
                devDescription="Highlighted priority text in dental gradient"
                className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
              >
                {' '}Priority
              </Span>
            </H1>
            <P 
              devId="hero-description" 
              devName="Hero Description" 
              devDescription="Hero section description for dental practice services"
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Dr. Miller provides comprehensive dental care with over 25 years of experience. 
              From routine cleanings to advanced procedures, we're here for your family's oral health.
            </P>
            <Div 
              devId="hero-cta-buttons" 
              devName="Hero CTA Buttons" 
              devDescription="Call-to-action buttons for dental practice"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button 
                    devId="hero-manage-practice"
                    devName="Manage Practice Button"
                    devDescription="Primary button to access practice management dashboard"
                    className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Manage Practice
                  </Button>
                </Link>
              ) : (
                <Link to="/register">
                  <Button 
                    devId="hero-book-appointment"
                    devName="Book Appointment Button"
                    devDescription="Primary call-to-action button for booking dental appointments"
                    className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Book Appointment
                  </Button>
                </Link>
              )}
              <Button 
                devId="hero-call-button"
                devName="Call Now Button"
                devDescription="Secondary button to call the dental office"
                variant="outline"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (555) 123-4567
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Stats Section */}
      <Container componentId="stats-section">
        <Section 
          devId="stats-content" 
          devName="Stats Content" 
          devDescription="Statistics section showing dental practice achievements"
          className="container mx-auto px-4 py-12"
        >
          <Div 
            devId="stats-grid" 
            devName="Stats Grid" 
            devDescription="Grid container for dental practice statistics"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                devId={getStatCardId(index)}
                devName={`${stat.label} Stat Card`}
                devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-100 shadow-lg"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="text-2xl font-bold text-blue-600 mb-2">{stat.value}</Div>
                  <Div devId="noID" className="text-gray-600">{stat.label}</Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Services Section */}
      <Container componentId="services-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Our Dental Services</H2>
            <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care for the whole family with state-of-the-art technology and gentle techniques
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                devId={getServiceCardId(index)}
                devName={`${service.title} Service Card`}
                devDescription={`Service card for ${service.title}: ${service.description}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-all shadow-lg hover:shadow-xl"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{service.icon}</Div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <P devId="noID" className="text-gray-600">{service.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Features Section */}
      <Container componentId="features-section">
        <Section devId="noID" className="container mx-auto px-4 py-20 bg-white/50 rounded-3xl mx-4">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Why Choose Dr. Miller?</H2>
            <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference of personalized, gentle dental care in a comfortable environment
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                devId={getFeatureCardId(index)}
                devName={`${feature.title} Feature Card`}
                devDescription={`Feature card highlighting ${feature.title}: ${feature.description}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 hover:border-teal-300 transition-all shadow-lg"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{feature.icon}</Div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <P devId="noID" className="text-gray-600">{feature.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Contact Section */}
      <Container componentId="contact-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-2xl p-12 text-center border border-blue-200">
            <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Ready to Schedule Your Visit?</H2>
            <P devId="noID" className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to book your appointment or learn more about our dental services
            </P>
            <Div devId="noID" className="grid md:grid-cols-3 gap-6 mb-8">
              <Div devId="noID" className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <Span devId="noID" className="text-gray-700">(555) 123-4567</Span>
              </Div>
              <Div devId="noID" className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <Span devId="noID" className="text-gray-700">info@drmillerdental.com</Span>
              </Div>
              <Div devId="noID" className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <Span devId="noID" className="text-gray-700">123 Main St, City, ST</Span>
              </Div>
            </Div>
            <Div devId="noID" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                devId="contact-book-appointment"
                devName="Contact Book Appointment"
                devDescription="Primary CTA button to book dental appointment"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button 
                devId="contact-call-office"
                devName="Call Office Button"
                devDescription="Secondary CTA button to call dental office"
                variant="outline"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Office
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Footer */}
      <Footer 
        devId="main-footer" 
        devName="Main Footer" 
        devDescription="Dental practice footer with contact info and links"
        className="container mx-auto px-4 py-8 border-t border-blue-200"
      >
        <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
          <Div devId="noID" className="text-gray-600 mb-4 md:mb-0">
            © 2024 Dr. Miller Dental Practice. Caring for smiles with excellence.
          </Div>
          <Div devId="noID" className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </Div>
        </Div>
      </Footer>
      </Div>
    </Container>
  );
};