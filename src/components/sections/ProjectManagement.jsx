import { CheckSquare } from 'lucide-react';

const ProjectManagement = () => {
  const managementAreas = [
    "Integration Management",
    "Scope Management",
    "Time Management",
    "Cost Management",
    "Quality Management",
    "Human Resource Management",
    "Communication Management",
    "Risk Management",
    "Procurement Management"
  ];

  const practices = [
    "Daily Progress Reports",
    "Weekly Meetings",
    "Inspection & Quality Control",
    "Risk Monitoring",
    "Safety Management"
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col">
            <h2 className="section-title text-left">Project Management Expertise</h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              We ensure project success through rigorous planning, execution, and monitoring. Our certified project managers apply globally recognized methodologies to deliver your projects on time and within budget.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {managementAreas.map((area, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center transition-all duration-200 flex items-center justify-center min-h-[80px] hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 hover:shadow-md cursor-default">
                  <div className="font-medium text-[0.9rem] leading-snug">
                    {area}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-primary text-white p-10 rounded-xl shadow-lg">
              <h3 className="text-accent text-2xl font-bold mb-6">Our Standard Practices</h3>
              <ul className="flex flex-col gap-5">
                {practices.map((practice, index) => (
                  <li key={index} className="flex items-center gap-4 text-[1.05rem] font-medium">
                    <CheckSquare className="text-accent shrink-0" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4">
              <img 
                src="https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?q=80&w=1974&auto=format&fit=crop" 
                alt="Project Management Meeting" 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;
