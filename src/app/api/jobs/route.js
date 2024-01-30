export async function GET(request) {
  return Response.json([
    {
      title: "Salesforce",
      desc: "Worked on dashboards / workflows",
    },
    {
      title: "Intel",
      desc: "Created Python scripts",
    },
  ]);
}
