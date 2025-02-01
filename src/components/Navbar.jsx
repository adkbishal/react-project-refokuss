import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl py-6 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700">
      <img className="h-20 w-20 rounded-xl  "
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKIArgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECBQYIBAP/xABJEAABAwMBBQQCDAkNAQAAAAABAAIDBAURBgcSITFRE0FhcTKRCBQVIjRzdHWSsbPRFiM1N0JSU4GyJCUzQ1RVYmNygpWhojb/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQUEA//EACARAQABAgYDAAAAAAAAAAAAAAABAxMCBBEhIlEFEqH/2gAMAwEAAhEDEQA/AImREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARbX+C1L/aKj/wA/csLe7YLbPG1kheyRpLd7mMc8rtr+Pr0MHvjjZdGOREXEgiIgIiICIiAiqAXENaC5xOAAMknuAC3Kj2XauqaN1W+gipIw0vxVThryMZ9EZI8jgoNMRUa4OaHDkRlVQERCQBk8AgIsjNYL3BTOqZ7JdIqdjd900lFK1jW9S4twB4rHICIiAiIg2DtNS9JPoRrE3F1Y6p/nDtO2A5PGOHhjhjyWyfhPQ/sqj6LfvWEvtyZcp43RRuYyNpA3uZytbORRtcK04p6mdVljFKWwe1266Vt7bc6ClrGxxwFgqIWybuTJnGQcch6lFql32O3w+/8AxVP9ciyUbjfa3Ztp+4Ggu9BaaeqDBIY/crf96c4OWsI7iqRaY2e61t0klppKDAODNb2CCWJx6gAcfBwI8FH22iz3Wt1y+eitdfUwmkib2kFK+RuQXZGWg9Qs9sK05eLbWXK43KjqKKnlhbFHHUMLHSOBJzuniAOpHHe4IIv1hp2o0tqCotVS/tAzD4pcY7WM+i7HdyIPiCsMxrnvbHG1z3uOGsaMlx6ADmpF28VsNTrSKCnw+SlomRy7vE75c5wb54IP+5STpDTVo2eaYfdLoIxWtg7StqyN5zf8tnfjPAAekfNBAh01qBsfaO0/dwzGd40EuMfRWLPAkEEFpwQeYPRThDtytzq7cmstXHRE47YStc8DqWfc4rKbTdI27VWm3360sjNwjgFRDPEPhUWM7p65b6J5g47iUEe7E7M+t1lBXVNHK6lpoJJYpnRHszKCGjDsYJG84+Y8FJG1XU9/sjKWj0/a3VXtqOQzze1pJhGOAAAbyJyeJ6LB7CtVQTUUWl200omgjmqvbG8NxwMg4Ac8+/HqW06+1/SaNqKWmqaCoqnVUb3tMTmjdwQOOfNBzOwAMaGnIA4L3UFnutyi7W22qvrIv2lNSvkb62ghb3sY0NTagllul4jbNQUThEyB3ozS4BO91aARw7yePAEGRdXbTrJpOu9yo6WarqYWgSR04a1kIxwaSTzxjgB6kHPVdQ1lulbFcaOppJHeiyphdEXeQcBleSb+hk/0ldPaf1Fp3aRaKmmfS9o1mBUUVWwbzM8nDBPQ4cDkY7ioF2j6XdpK/VNva5z6R8fbUsjuJMZyMHxBBHqPegn7Wn5srt81P+zXMcUck0rIoY3ySvOGMjaXOcegA4krpzWn5srt81P+zWrbG9Ce5dOzUV4hxXzN/ksTxxp4yPSPRzh6gcd5CCF5bNdoY3yzWm4xxsBc576SRrWgcySRwCsprXcquITUltrqiIkgSQ0z3tOOfEDCkDa1tB93pn2WyzfzVE78dMw/CnjuH+AH6R48sZkTYn+bug+On+1cg5xc1zHOa9pa5pIc1wwQRzBC9FJb66ta51FQ1dS1hw4wQPkDT0O6DhfW+/l66/Lp/tHKYPY8fkq9fKmfwIIgu1slts2HZdC70JOvgfFeBb7FJSXehOAHxP4OaebT08CtQu1ufbans3Hejdxjf1Hj4rTz2RilF2lvgn4sw8Kl32O3w+//ABVP9ciiJS77Hb4ff/iqf65FmI3e8bQoLPryl01W0YbBUMjPt3tvQc/IaC3HLIAznvX32o3W/WXS0tw092IdE4e2Hvj33xxnhvsGcZBxnIIxk9yiLbmAdfSA8jRQ/W9Spsu1NHq/Shp7gWzVtK32vWMfx7VpGGvI6OGc+Icg5+tU5m1JQVNdI6UvuEMk8khyXZkaXEnv7109rKqs1Fp6pn1JAJ7Y0s7Zjou0By4BuW9/viFzjr7S8mldRVNtcHOpH/jKWQ/pxHkM9R6J8s96mLQeubTq+xtsuoZIRcXRdhPDUEBtWMY3m9SRzHMHPdgoMH+EmyD+5YP+Ld9yzNNtb0HSUTKOknmjp42bkcTKR4a1vcAMK+DYxpeK4NqXy3CWBrt72pJM0xnwJ3d4j9/mvBtX11aqG1VFisj4J6+oYYZnwgFtNGRhwyP0yOAA5czjgCGn7AAW61eDzFskB+nEsp7Ib8s2T5NN/E1Y3YL/APczfNsv2kSyXshvyzZPk038TUG5bDXRnQEAZjebUzCTz3yfqLVBermzM1bfG1IcJfdCfe3vGRxH7sYx4YW1bJNcw6Vrp6G6OcLXWODzIBnsJMY3sdCMA9N0eKlTUGg9La3e27CRwllaM1lvmb+NA5Z4OaeHDOM44Z4BBGWwRkx1tO+MO7JtvkEpHLi9mAfUfUVkfZHGM1tmaMdoKaoLvIlmPqcpDp4NJ7MrPIRJHSMk988yP356hw5ADm7vwBwHHlxXPuutST6rvdXdZ2GNjmdnBETns4m5wPPJJPiSg6efLRwaeZLczGKNlO10xkGWhoAyT4LXtrMF8q9G1DNOu3s8aqOPPaSwY98GEf8AY5kZA6H060/Nldvmp/2a0fYvrveEOl7vL75o3bfM48wP6o+IHo+Ax3DIQwMEAjl3Lo/Ykc7O6Hwmn+1ctL2wbPfabptR2OH+TuJfXU7B/RnvlaP1f1h3c+WcU2J61orXFNp+7zsp45JTLSTSHDN443oye7iMjPMkjpkI01A1zNQ3ZjwQ5tfUAg9x7RymH2PDXe495fg7pq2NB8QwZ+sLY9TbMdN6juDrnOamlnlw6Z9JK1rZeHMhwI5d4wspov8AB2kpKiz6XdG+CgeGzOjfvgyO4nL/ANJ3Xpy7sAOYrfXz2+btacjjwc13Jw8VdcrjNcZmyTBrQ0Ya1vILxovS9Ut29ePQKjmNd6TQfMKqLzFGtDRhoAHQBHMa70mg46hVRBRrWtGGtAHgEIDhhwBHQqqIPqamodD2Dqicw4x2RlduY8s4XyAAGAMBEQUc1rhhwBHiEa1rfRaB5BVRAV8E0tM5zqaWSFzvSdE8sJ88KxEFXEvkdI8l0jvSe45J8yqIiC0RsByGNB64VSA4YIBHQqqILRGxpy1jQeoCuREFwkeIOwEjxCf6oOO76uS+ZYx2N5jTjlkK5EBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z"
        alt="logo-alt-img"
      />
      <div className="nleft flex items-center">
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span className="w-[2px] h-7 bg-zinc-200">|</span>
          ) : (
            <a className="text-sm flex items-center gap-1" href="#">
              {index === 1 && (
                <span
                  style={{ boxShadow: " 0 0 0.45em #00FF19" }}
                  className=" inline-block w-1 h-1 bg-green-500 rounded-full "
                ></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>
      </div>
      <Button/>
    </div>
  );
}

export default Navbar;
