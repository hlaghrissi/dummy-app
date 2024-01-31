function UnsafeComponent() {
    return <div dangerouslySetInnerHTML={{ __html: '<script>console.log("Unsafe script")</script>' }} />;
  }
  

export default UnsafeComponent;