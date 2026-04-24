import mongoose from 'mongoose';

const WorkSchema = new mongoose.Schema({
    company: String,
    href: String,
    badges: [String],
    location: String,
    title: String,
    logoUrl: String,
    start: String,
    end: String,
    description: String,
});

const EducationSchema = new mongoose.Schema({
    school: String,
    href: String,
    degree: String,
    logoUrl: String,
    start: String,
    end: String,
});

const ProjectLinkSchema = new mongoose.Schema({
    type: String,
    href: String,
    label: String,
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    href: String,
    dates: String,
    active: Boolean,
    description: String,
    technologies: [String],
    links: [ProjectLinkSchema],
    image: String,
    video: String,
});

const HackathonLinkSchema = new mongoose.Schema({
    title: String,
    href: String,
});

const HackathonSchema = new mongoose.Schema({
    title: String,
    dates: String,
    location: String,
    description: String,
    image: String,
    links: [HackathonLinkSchema],
});

const ResumeSchema = new mongoose.Schema({
    name: String,
    initials: String,
    url: String,
    location: String,
    locationLink: String,
    description: String,
    summary: String,
    avatarUrl: String,
    skills: [String],
    contact: {
        email: String,
        tel: String,
        social: {
            GitHub: {
                url: String,
            },
            LinkedIn: {
                url: String,
            },
            X: {
                url: String,
            },
            Youtube: {
                url: String,
            },
        }
    },
    work: [WorkSchema],
    education: [EducationSchema],
    projects: [ProjectSchema],
    hackathons: [HackathonSchema],
}, { timestamps: true });

export default mongoose.models.Resume || mongoose.model('Resume', ResumeSchema);
