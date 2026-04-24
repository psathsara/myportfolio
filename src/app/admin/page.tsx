'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Plus, Trash2, Save, LogOut, RefreshCw, User, Briefcase, GraduationCap, Terminal, Cpu, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function AdminDashboard() {
  const [resumeData, setResumeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const router = useRouter();

  useEffect(() => {
    fetchResumeData();
  }, []);

  const fetchResumeData = async () => {
    try {
      const response = await fetch('/api/admin/resume');
      if (response.status === 404) return;
      const data = await response.json();
      setResumeData(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMigrate = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/migrate', { method: 'POST' });
      if (response.ok) fetchResumeData();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resumeData),
      });
      if (response.ok) alert('Successfully saved to database!');
    } catch (error) {
      alert('Error saving data');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const addItem = (section: string, template: any) => {
    const newData = { ...resumeData };
    newData[section] = [...(newData[section] || []), template];
    setResumeData(newData);
  };

  const removeItem = (section: string, index: number) => {
    const newData = { ...resumeData };
    newData[section] = newData[section].filter((_: any, i: number) => i !== index);
    setResumeData(newData);
  };

  const updateItem = (section: string, index: number, field: string, value: any) => {
    const newData = { ...resumeData };
    newData[section][index] = { ...newData[section][index], [field]: value };
    setResumeData(newData);
  };

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <RefreshCw className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div className="py-12 flex flex-col items-center justify-center space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">Setup Required</h1>
          <p className="text-muted-foreground">Migrate your existing profile data to the database to start editing.</p>
        </div>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Welcome, Admin</CardTitle>
            <CardDescription>Your database is currently empty.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleMigrate} className="w-full">Migrate from resume.tsx</Button>
            <Button variant="outline" onClick={() => setResumeData({})} className="w-full">Start Scratch</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-12 pb-32 pt-12 sm:pt-24">
      {/* Header */}
      <header className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tighter">Admin Dashboard</h1>
            <p className="text-muted-foreground font-medium">Manage your professional portfolio content.</p>
          </div>
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Home className="size-5" />
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          <TabButton active={activeTab === 'personal'} onClick={() => setActiveTab('personal')} icon={<User className="size-4" />} label="Profile" />
          <TabButton active={activeTab === 'work'} onClick={() => setActiveTab('work')} icon={<Briefcase className="size-4" />} label="Work" />
          <TabButton active={activeTab === 'education'} onClick={() => setActiveTab('education')} icon={<GraduationCap className="size-4" />} label="Education" />
          <TabButton active={activeTab === 'projects'} onClick={() => setActiveTab('projects')} icon={<Terminal className="size-4" />} label="Projects" />
          <TabButton active={activeTab === 'skills'} onClick={() => setActiveTab('skills')} icon={<Cpu className="size-4" />} label="Skills" />
        </div>
      </header>

      {/* Main Form Area */}
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-3 duration-500">

        {activeTab === 'personal' && (
          <section className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight">Personal Information</h2>
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input value={resumeData.name || ''} onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Initials</Label>
                  <Input value={resumeData.initials || ''} onChange={(e) => setResumeData({ ...resumeData, initials: e.target.value })} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Tagline</Label>
                <Input value={resumeData.description || ''} onChange={(e) => setResumeData({ ...resumeData, description: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Summary (About Me)</Label>
                <Textarea value={resumeData.summary || ''} rows={8} onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input value={resumeData.contact?.email || ''} onChange={(e) => {
                    const newData = { ...resumeData };
                    if (!newData.contact) newData.contact = {};
                    newData.contact.email = e.target.value;
                    setResumeData(newData);
                  }} />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input value={resumeData.contact?.tel || ''} onChange={(e) => {
                    const newData = { ...resumeData };
                    if (!newData.contact) newData.contact = {};
                    newData.contact.tel = e.target.value;
                    setResumeData(newData);
                  }} />
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'work' && (
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
              <Button onClick={() => addItem('work', { company: '', title: '', start: '', end: 'Present', description: '' })} variant="outline" size="sm">
                <Plus className="size-4 mr-2" /> Add Work
              </Button>
            </div>
            <div className="space-y-6">
              {resumeData.work?.map((work: any, i: number) => (
                <Card key={i} className="relative group">
                  <Button variant="ghost" size="icon" onClick={() => removeItem('work', i)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-destructive">
                    <Trash2 className="size-4" />
                  </Button>
                  <CardContent className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <Input placeholder="Company" value={work.company} onChange={(e) => updateItem('work', i, 'company', e.target.value)} />
                      <Input placeholder="Job Title" value={work.title} onChange={(e) => updateItem('work', i, 'title', e.target.value)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Start Date" value={work.start} onChange={(e) => updateItem('work', i, 'start', e.target.value)} />
                      <Input placeholder="End Date" value={work.end} onChange={(e) => updateItem('work', i, 'end', e.target.value)} />
                    </div>
                    <Textarea placeholder="Job Description" value={work.description} onChange={(e) => updateItem('work', i, 'description', e.target.value)} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'projects' && (
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
              <Button onClick={() => addItem('projects', { title: '', description: '', technologies: [], links: [{ type: 'Live Demo', href: '' }, { type: 'GitHub', href: '' }, { type: 'LinkedIn', href: '' }], active: true })} variant="outline" size="sm">
                <Plus className="size-4 mr-2" /> Add Project
              </Button>
            </div>
            <div className="grid gap-6">
              {resumeData.projects?.map((project: any, i: number) => {
                const getLink = (type: string) => project.links?.find((l: any) => l.type === type)?.href || '';
                const updateLink = (type: string, val: string) => {
                  const newData = { ...resumeData };
                  if (!newData.projects[i].links) newData.projects[i].links = [];
                  const linkIdx = newData.projects[i].links.findIndex((l: any) => l.type === type);
                  if (linkIdx > -1) {
                    newData.projects[i].links[linkIdx].href = val;
                  } else {
                    newData.projects[i].links.push({ type, href: val });
                  }
                  setResumeData(newData);
                };

                return (
                  <Card key={i} className="relative group">
                    <Button variant="ghost" size="icon" onClick={() => removeItem('projects', i)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-destructive">
                      <Trash2 className="size-4" />
                    </Button>
                    <CardContent className="p-6 space-y-4 pt-8">
                      <div className="space-y-2">
                        <Label>Project Title</Label>
                        <Input placeholder="Project Title" value={project.title} onChange={(e) => updateItem('projects', i, 'title', e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea placeholder="Short Description" value={project.description} onChange={(e) => updateItem('projects', i, 'description', e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label>Technologies (Comma separated)</Label>
                        <Input placeholder="Tech Stack (comma separated)" value={project.technologies?.join(', ')} onChange={(e) => updateItem('projects', i, 'technologies', e.target.value.split(',').map((s: string) => s.trim()))} />
                      </div>
                      <Separator className="my-4" />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label>Live Demo Link</Label>
                          <Input placeholder="https://..." value={getLink('Live Demo')} onChange={(e) => updateLink('Live Demo', e.target.value)} />
                        </div>
                        <div className="space-y-2">
                          <Label>GitHub Link</Label>
                          <Input placeholder="https://github.com/..." value={getLink('GitHub')} onChange={(e) => updateLink('GitHub', e.target.value)} />
                        </div>
                        <div className="space-y-2">
                          <Label>LinkedIn Link</Label>
                          <Input placeholder="https://linkedin.com/posts/..." value={getLink('LinkedIn')} onChange={(e) => updateLink('LinkedIn', e.target.value)} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {activeTab === 'education' && (
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>
              <Button onClick={() => addItem('education', { school: '', degree: '', start: '', end: '' })} variant="outline" size="sm">
                <Plus className="size-4 mr-2" /> Add Education
              </Button>
            </div>
            <div className="space-y-6">
              {resumeData.education?.map((edu: any, i: number) => (
                <Card key={i} className="relative group">
                  <Button variant="ghost" size="icon" onClick={() => removeItem('education', i)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-destructive">
                    <Trash2 className="size-4" />
                  </Button>
                  <CardContent className="p-6 space-y-4 pt-8">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="School Name" value={edu.school} onChange={(e) => updateItem('education', i, 'school', e.target.value)} />
                      <Input placeholder="Degree" value={edu.degree} onChange={(e) => updateItem('education', i, 'degree', e.target.value)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Start Year" value={edu.start} onChange={(e) => updateItem('education', i, 'start', e.target.value)} />
                      <Input placeholder="End Year" value={edu.end} onChange={(e) => updateItem('education', i, 'end', e.target.value)} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'skills' && (
          <section className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label>Skills Cloud (Comma Separated)</Label>
                  <Textarea
                    className="min-h-[250px]"
                    value={resumeData.skills?.join(', ')}
                    onChange={(e) => setResumeData({ ...resumeData, skills: e.target.value.split(',').map((s: string) => s.trim()) })}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills?.map((skill: string, i: number) => (
                    <Badge key={i} variant="secondary" className="font-medium">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

      </div>

      {/* Sticky Bottom Actions */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t z-50 p-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4 px-6">
          <Button variant="ghost" onClick={handleLogout} className="text-muted-foreground hover:text-destructive">
            <LogOut className="size-4 mr-2" /> Logout
          </Button>
          <Button onClick={handleSave} disabled={saving} className="min-w-[140px]">
            {saving ? <RefreshCw className="mr-2 size-4 animate-spin" /> : <Save className="mr-2 size-4" />}
            Save Portfolio
          </Button>
        </div>
      </footer>
    </div>
  );
}

function TabButton({ active, icon, label, onClick }: { active: boolean, icon: any, label: string, onClick: () => void }) {
  return (
    <Button
      variant={active ? "default" : "secondary"}
      size="sm"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-full px-4 h-9",
        !active && "bg-muted text-muted-foreground hover:bg-muted/80"
      )}
    >
      {icon}
      {label}
    </Button>
  );
}
