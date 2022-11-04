import useWindowDimensions from "../../hooks/useWindowSize";

import IllustrationEditorDesktop from "../../assets/illustration-editor-desktop.svg";
import IllustrationEditorMobile from "../../assets/illustration-editor-mobile.svg";

const DesktopSection = () => {
  const { width } = useWindowDimensions();

  const IllustrationEditor =
    width > 768 ? (
      <img src={IllustrationEditorDesktop} className="-mt-32" />
    ) : (
      <img src={IllustrationEditorMobile} />
    );

  return (
    <section>
      <div className="flex flex-col md:flex-row-reverse">
        <figure className="mx-auto mt-10 md:flex-[3_1_0] md:-mr-44">
          {IllustrationEditor}
        </figure>
        <aside className="md:flex-[2_1_0] pt-12 px-6 md:pt-24 md:px-[10%]">
          <div className="pb-10 md:pb-16 text-center md:text-justify">
            <h2 className="font-semibold text-2xl text-very-dark-blue pb-4">
              Introducing an extensible editor
            </h2>
            <p className="text-very-light-blue">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="text-center md:text-justify">
            <h2 className="font-semibold text-2xl text-very-dark-blue pb-4">
              Robust content management
            </h2>
            <p className="text-very-light-blue">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default DesktopSection;
