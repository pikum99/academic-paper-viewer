import React, { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';

const sampleMarkdown = `# A Novel Approach to Declarative UI Rendering

**John Doe**  
*Department of Computer Science, Example University*  
johndoe@example.com

## Abstract

This paper presents a comprehensive analysis of modern declarative UI frameworks and their impact on software development practices. We demonstrate that component-based architectures significantly improve code maintainability and developer productivity. Our findings suggest a 40% reduction in bug density when compared to imperative approaches.

**Keywords:** React, Declarative Programming, Component Architecture, UI Frameworks

## Introduction

The evolution of web development has been marked by a fundamental shift from imperative to declarative paradigms. Traditional approaches required developers to manually manipulate the Document Object Model (DOM), leading to complex and error-prone code. Modern frameworks like React have revolutionized this landscape by introducing a declarative model where developers describe *what* the UI should look like, rather than *how* to construct it.

Consider the mathematical representation of state transitions in a traditional imperative system:

$$S_{t+1} = f(S_t, A_t)$$

where $S_t$ represents the state at time $t$, and $A_t$ represents the action applied. In contrast, declarative systems can be represented as:

$$UI = g(State)$$

This functional purity eliminates entire classes of bugs related to state inconsistency.

## Background and Related Work

Early web development relied heavily on jQuery and similar libraries for DOM manipulation. These imperative approaches, while powerful, suffered from several critical issues:

1. **State Management Complexity**: As applications grew, tracking which parts of the DOM reflected which data became increasingly difficult.
2. **Code Maintainability**: Imperative code often resulted in spaghetti logic that was hard to reason about.
3. **Testing Challenges**: Testing imperative UI code required complex setup and mocking of browser APIs.

The introduction of Angular in 2010 marked the first mainstream attempt at a declarative framework, though it still retained significant complexity. React's release in 2013 simplified this model further with its component-based architecture and virtual DOM.

### The Virtual DOM Concept

The virtual DOM is an in-memory representation of the actual DOM. When state changes occur, React:

- Creates a new virtual DOM tree
- Compares it with the previous tree (diffing)
- Calculates the minimal set of changes needed
- Applies only those changes to the real DOM

This process, known as reconciliation, can be expressed algorithmically with time complexity:

$$O(n) \\text{ where } n = \\text{number of nodes}$$

Traditional tree diffing algorithms have complexity $O(n^3)$, making React's optimization particularly significant.

## Methodology

Our study involved analyzing 50 production applications built with both imperative (jQuery-based) and declarative (React-based) approaches. We measured:

- **Lines of Code (LOC)**: Total codebase size
- **Cyclomatic Complexity**: Average complexity per function
- **Bug Density**: Bugs per 1000 lines of code
- **Development Time**: Time to implement new features

\`\`\`javascript
// Example: Declarative component
function UserProfile({ user }) {
  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => console.log('Edit')}>
        Edit Profile
      </button>
    </div>
  );
}
\`\`\`

The declarative nature of this code makes it immediately clear what will be rendered, without needing to trace through imperative DOM manipulation calls.

## Results

Our findings demonstrate significant advantages for declarative approaches:

| Metric | Imperative | Declarative | Improvement |
|--------|-----------|-------------|-------------|
| Avg LOC | 15,230 | 9,450 | 38% reduction |
| Cyclomatic Complexity | 8.4 | 4.2 | 50% reduction |
| Bug Density | 12.3/1000 | 7.4/1000 | 40% reduction |
| Feature Dev Time | 8.2 days | 5.1 days | 38% faster |

The statistical significance of these results was confirmed using paired t-tests with $p < 0.01$.

### Performance Analysis

While virtual DOM adds overhead, modern implementations are highly optimized. Our benchmarks show:

$$T_{render} = O(n \\cdot \\log n)$$

where $n$ is the number of components requiring updates. This compares favorably to naive re-rendering which scales as $O(n^2)$.

## Discussion

The results clearly indicate that declarative frameworks provide substantial benefits. However, there are important caveats:

**Learning Curve**: Developers accustomed to imperative programming must shift their mental model. This transition typically requires 2-3 months of practice.

**Abstraction Cost**: The declarative model abstracts away low-level details, which can make performance optimization less intuitive.

**Ecosystem Maturity**: While React's ecosystem is mature, newer frameworks may have limited library support.

### Developer Experience

Our qualitative analysis revealed that developers using declarative frameworks reported higher job satisfaction. Survey responses indicated:

- 78% found code reviews easier with declarative code
- 85% appreciated the predictability of component behavior
- 92% valued the ability to compose complex UIs from simple components

One senior developer noted: *"With React, I can reason about my application one component at a time. The mental load is significantly reduced compared to keeping track of DOM mutations across multiple jQuery callbacks."*

### Industry Adoption Patterns

The adoption curve for declarative frameworks has been steep. Our industry survey of 500+ companies revealed:

1. **Early Adopters (2013-2015)**: Primarily startups and tech-forward companies
2. **Early Majority (2016-2018)**: Mid-sized companies and progressive enterprises
3. **Late Majority (2019-2021)**: Large enterprises and conservative industries
4. **Laggards (2022+)**: Legacy systems with significant technical debt

The diffusion of innovation follows the classic S-curve, with React reaching approximately 67% market penetration among web applications by 2023.

### Challenges and Limitations

Despite the benefits, several challenges persist:

**Initial Bundle Size**: React applications can have larger initial bundle sizes compared to vanilla JavaScript. Our measurements show:

$$S_{bundle} = S_{framework} + S_{app} + S_{dependencies}$$

where $S_{framework}$ averages 45KB (gzipped), and $S_{dependencies}$ can range from 50-500KB depending on the application.

**SEO Considerations**: Client-side rendered applications historically struggled with search engine optimization. However, server-side rendering (SSR) and static site generation (SSG) have largely mitigated this concern.

**Over-Engineering Risk**: For simple websites with minimal interactivity, declarative frameworks may introduce unnecessary complexity. A cost-benefit analysis should consider application requirements.

### Future Directions

The evolution of declarative UI paradigms continues to accelerate. Several emerging trends warrant attention:

**Reactive Primitives**: Frameworks like Solid and Svelte push declarative concepts further by compiling components to optimized imperative code at build time. Early benchmarks suggest performance improvements of 20-30% compared to React.

**Concurrent Rendering**: React 18's concurrent features enable applications to remain responsive during expensive renders by breaking work into interruptible chunks. The scheduling algorithm can be modeled as:

$$Priority(task) = \\frac{Urgency \\times Weight}{Age + 1}$$

This prioritization ensures that user interactions receive immediate attention while background updates proceed when the main thread is idle.

**Type Safety Integration**: TypeScript adoption has grown alongside React, with 72% of React projects now using static typing. This combination provides both declarative clarity and compile-time safety, reducing runtime errors by an estimated 15-20%.

**Cross-Platform Declarative UIs**: React Native, Flutter, and similar frameworks extend declarative principles to mobile development. Our comparative analysis shows code reuse rates of 60-80% between web and mobile platforms when using these technologies.

### Economic Impact

The economic implications of framework choice are substantial. Our cost analysis for a medium-sized project (50,000 LOC) shows:

| Cost Factor | Imperative | Declarative | Savings |
|-------------|-----------|-------------|---------|
| Initial Development | $180,000 | $135,000 | 25% |
| Annual Maintenance | $75,000 | $48,000 | 36% |
| Bug Fixing | $32,000 | $19,000 | 41% |
| Feature Additions | $95,000 | $62,000 | 35% |
| **5-Year TCO** | **$562,000** | **$359,000** | **36%** |

These figures assume a team of 4 developers at market rates. The savings compound over time as declarative codebases remain more maintainable.

### Case Study: Large-Scale Migration

We documented a Fortune 500 company's migration from a jQuery-based application (250,000 LOC) to React over 18 months. Key findings:

- **Phase 1 (Months 1-6)**: Hybrid approach with React components embedded in legacy pages
- **Phase 2 (Months 7-12)**: Gradual replacement of major features
- **Phase 3 (Months 13-18)**: Final migration and legacy code removal

The migration reduced page load time by 42%, decreased customer support tickets related to UI bugs by 58%, and improved developer velocity by 31% (measured by story points per sprint).

Post-migration, the engineering team reported that new features that previously took 2-3 sprints now took 1-2 sprints on average. Technical debt decreased significantly, with code complexity metrics improving across all modules.

### Theoretical Foundations

The success of declarative frameworks can be understood through the lens of cognitive load theory. Imperative programming requires developers to maintain mental models of:

1. Current state
2. Desired state
3. Transformation sequence
4. Side effects and edge cases

Declarative programming reduces this to:

1. Current state
2. Desired state (as a pure function of state)

This represents a 50% reduction in cognitive load, aligning with our empirical findings of improved productivity and reduced bug rates.

Furthermore, functional reactive programming (FRP) principles underlying these frameworks provide mathematical guarantees about program behavior. The composition of pure functions is itself pure:

$$f: S \\rightarrow UI_1, \\quad g: S \\rightarrow UI_2 \\implies h(s) = f(s) \\oplus g(s): S \\rightarrow UI_{combined}$$

This composability is the foundation of component-based architecture.

## Conclusion

This paper has demonstrated the significant advantages of declarative UI frameworks in modern web development. Our empirical analysis shows meaningful improvements in code quality, maintainability, and development speed. As the web continues to evolve toward more complex applications, declarative approaches will become increasingly essential.

The evidence is compelling across multiple dimensions: technical metrics show substantial improvements in code quality and performance; developer experience surveys reveal increased satisfaction and productivity; economic analysis demonstrates clear cost savings; and theoretical foundations provide sound justification for these observed benefits.

Future work should explore:
- Integration with WebAssembly for performance-critical paths
- Advanced state management patterns with distributed systems
- Server-side rendering optimizations for edge computing
- AI-assisted component generation and optimization
- Formal verification methods for UI correctness
- Accessibility improvements through declarative patterns

As we look toward the next decade of web development, the declarative paradigm appears poised to dominate. The question is no longer whether to adopt these frameworks, but rather how to optimize their usage and extend their benefits to new domains.

## Acknowledgments

This research was supported by the Japan Science and Technology Agency (JST) and the Ministry of Education, Culture, Sports, Science and Technology (MEXT). We thank the developers who participated in our surveys and case studies. Special thanks to the React core team for their technical insights.

## References

[1] Smith, J. et al. (2018). "Component-Based Architecture Patterns." *Journal of Software Engineering*, 42(3), 234-256.

[2] Johnson, M. (2020). "Virtual DOM Performance Analysis." *ACM Computing Surveys*, 53(2), 1-34.

[3] Chen, L. & Park, S. (2019). "Empirical Study of Framework Adoption." *IEEE Software*, 36(4), 45-52.

[4] Williams, K. (2021). "Cognitive Load in Software Development." *Communications of the ACM*, 64(8), 88-95.

[5] Anderson, R. & Thompson, D. (2022). "Economic Analysis of Technical Debt." *IEEE Transactions on Software Engineering*, 48(6), 2234-2251.

[6] Garcia, M. et al. (2020). "Declarative UI Frameworks: A Comparative Study." *Proceedings of the International Conference on Software Engineering*, 412-423.

[7] Lee, S. (2023). "The Future of Web Development: Trends and Predictions." *ACM Computing Surveys*, 55(9), 1-42.

[8] Brown, A. & Davis, J. (2019). "Type Safety in Dynamic Languages." *Programming Language Design and Implementation*, 301-315.
`;

export default function AcademicPaperViewer({
  initialMarkdown = sampleMarkdown,
  defaultShowEditor = false
}) {
  const [markdown, setMarkdown] = useState(initialMarkdown);
  const [showEditor, setShowEditor] = useState(defaultShowEditor);

  // Markdownを1カラム部分と2カラム部分に分割
  const { singleColumnContent, restContent } = useMemo(() => {
    // Keywords の後で分割
    const keywordsPattern = /\*\*Keywords:?\*\*[^\n]*\n/i;
    const keywordsMatch = markdown.match(keywordsPattern);

    if (keywordsMatch) {
      const splitIndex = keywordsMatch.index + keywordsMatch[0].length;
      return {
        singleColumnContent: markdown.substring(0, splitIndex),
        restContent: markdown.substring(splitIndex)
      };
    }

    // Keywords が見つからない場合は Abstract の後で分割
    const abstractPattern = /## Abstract[\s\S]*?\n\n/i;
    const abstractMatch = markdown.match(abstractPattern);

    if (abstractMatch) {
      const splitIndex = abstractMatch.index + abstractMatch[0].length;
      return {
        singleColumnContent: markdown.substring(0, splitIndex),
        restContent: markdown.substring(splitIndex)
      };
    }

    // どちらも見つからない場合は全て2カラムに
    return {
      singleColumnContent: '',
      restContent: markdown
    };
  }, [markdown]);

  // 2カラム部分をセクションごとに分割してページに配置
  const pages = useMemo(() => {
    const APPROX_LINES_PER_PAGE = 50; // おおよその1ページあたりの行数

    // 2カラム部分をセクションに分割
    const lines = restContent.split('\n');
    const sections = [];
    let currentSection = [];

    lines.forEach((line, index) => {
      // セクションの区切り: ## で始まる行
      if (line.match(/^## /) && currentSection.length > 0) {
        sections.push(currentSection.join('\n'));
        currentSection = [line];
      } else {
        currentSection.push(line);
      }
    });

    if (currentSection.length > 0) {
      sections.push(currentSection.join('\n'));
    }

    // セクションをページに配置
    const result = [];
    let currentPage = [];
    let currentLineCount = 0;

    sections.forEach((section) => {
      const sectionLines = section.split('\n').length;

      // セクションを追加するとページの行数を超える場合、新しいページを開始
      if (currentLineCount + sectionLines > APPROX_LINES_PER_PAGE && currentPage.length > 0) {
        result.push(currentPage.join('\n\n'));
        currentPage = [section];
        currentLineCount = sectionLines;
      } else {
        currentPage.push(section);
        currentLineCount += sectionLines;
      }
    });

    if (currentPage.length > 0) {
      result.push(currentPage.join('\n\n'));
    }

    return result;
  }, [restContent]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #faf9f7 0%, #f5f4f2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header Controls */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e5e3df',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '18px',
          fontWeight: 600,
          color: '#2c2823',
          letterSpacing: '-0.02em'
        }}>
          Academic Paper Viewer
        </h1>
        <button
          onClick={() => setShowEditor(!showEditor)}
          style={{
            padding: '8px 16px',
            background: '#2c2823',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.background = '#1a1715'}
          onMouseLeave={(e) => e.target.style.background = '#2c2823'}
        >
          {showEditor ? 'Show Preview' : 'Show Markdown'}
        </button>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '1800px',
        margin: '0 auto'
      }}>
        {showEditor ? (
          /* Editor Panel */
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            padding: '40px'
          }}>
            <h2 style={{
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#2c2823'
            }}>
              Markdown Editor
            </h2>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              style={{
                width: '100%',
                height: 'calc(100vh - 200px)',
                padding: '20px',
                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                fontSize: '13px',
                lineHeight: '1.7',
                border: '1px solid #e5e3df',
                borderRadius: '8px',
                resize: 'none',
                background: 'white',
                color: '#2c2823'
              }}
              spellCheck={false}
            />
          </div>
        ) : (
          /* Paper Display */
          <div style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            padding: '60px 40px'
          }}>
          <div className="paper-pages-container" style={{
            width: '210mm',
            margin: '0 auto'
          }}>
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Source+Sans+3:wght@400;600;700&display=swap');
              @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

              .paper-page {
                width: 210mm;
                min-height: 297mm;
                background: white;
                box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);
                margin-bottom: 20px;
                padding: 25mm;
                padding-bottom: 35mm;
                box-sizing: border-box;
                position: relative;
                page-break-after: always;
              }

              .paper-page-number {
                position: absolute;
                bottom: 15mm;
                left: 50%;
                transform: translateX(-50%);
                font-family: 'Source Sans 3', sans-serif;
                font-size: 11px;
                color: #666;
              }

              .paper-content {
                font-family: 'Crimson Text', Georgia, serif;
                font-size: 16px;
                line-height: 1.8;
                color: #1a1715;
              }

              .single-column-section {
                text-align: center;
                margin-bottom: 40px;
              }

              .two-column-section {
                column-count: 2;
                column-gap: 48px;
                column-rule: 1px solid #e5e3df;
                text-align: justify;
                hyphens: auto;
              }

              .paper-content h1 {
                font-family: 'Source Sans 3', sans-serif;
                font-size: 32px;
                font-weight: 700;
                line-height: 1.3;
                margin: 0 0 24px 0;
                color: #1a1715;
                text-align: center;
                letter-spacing: -0.02em;
              }

              .paper-content h2 {
                font-family: 'Source Sans 3', sans-serif;
                font-size: 20px;
                font-weight: 700;
                margin: 32px 0 16px 0;
                color: #1a1715;
                break-after: avoid;
                break-inside: avoid;
                letter-spacing: -0.01em;
              }

              .paper-content h3 {
                font-family: 'Source Sans 3', sans-serif;
                font-size: 16px;
                font-weight: 600;
                margin: 24px 0 12px 0;
                color: #2c2823;
                break-after: avoid;
                break-inside: avoid;
              }

              .paper-content p {
                margin: 0 0 14px 0;
              }

              .single-column-section p {
                text-align: center;
                margin: 8px auto;
                max-width: 800px;
              }

              .paper-content strong {
                font-weight: 600;
                color: #1a1715;
              }

              .paper-content em {
                font-style: italic;
              }

              .paper-content code {
                font-family: 'JetBrains Mono', 'Courier New', monospace;
                font-size: 13px;
                background: #f5f4f2;
                padding: 2px 6px;
                borderRadius: 3px;
                color: #c7254e;
              }

              .paper-content pre {
                background: #f5f4f2;
                padding: 16px;
                borderRadius: 4px;
                overflow-x: auto;
                margin: 16px 0;
                border-left: 3px solid #2c2823;
                column-span: all;
              }

              .paper-content pre code {
                background: none;
                padding: 0;
                color: #2c2823;
                font-size: 13px;
                line-height: 1.6;
              }

              .paper-content table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
                font-size: 14px;
                column-span: all;
                font-family: 'Source Sans 3', sans-serif;
              }

              .paper-content th {
                background: #2c2823;
                color: white;
                padding: 10px 12px;
                text-align: left;
                font-weight: 600;
                border: 1px solid #1a1715;
              }

              .paper-content td {
                padding: 10px 12px;
                border: 1px solid #e5e3df;
              }

              .paper-content tr:nth-child(even) {
                background: #faf9f7;
              }

              .paper-content ul, .paper-content ol {
                margin: 12px 0;
                padding-left: 24px;
              }

              .paper-content li {
                margin: 6px 0;
              }

              .paper-content blockquote {
                border-left: 3px solid #2c2823;
                padding-left: 20px;
                margin: 16px 0;
                color: #4a4541;
                font-style: italic;
              }

              .paper-content .katex {
                font-size: 1.1em;
              }

              .paper-content .katex-display {
                margin: 20px 0;
                column-span: all;
                text-align: center;
              }

              .paper-content a {
                color: #2c2823;
                text-decoration: none;
                border-bottom: 1px solid #2c2823;
              }

              .paper-content a:hover {
                background: #f5f4f2;
              }

              /* Print styles */
              @media print {
                body {
                  margin: 0;
                  padding: 0;
                }

                .paper-page {
                  box-shadow: none;
                  margin: 0;
                  page-break-after: always;
                  width: 210mm;
                  height: 297mm;
                }

                .paper-page:last-child {
                  page-break-after: auto;
                }

                @page {
                  size: A4;
                  margin: 0;
                }
              }
            `}</style>

            {/* 最初のページ: 1カラム部分 + 2カラム部分 */}
            <div className="paper-page">
              <div className="paper-content">
                {/* タイトル、著者、Abstract、Keywords（1カラム・中央揃え） */}
                <div className="single-column-section">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex]}
                  >
                    {singleColumnContent}
                  </ReactMarkdown>
                </div>

                {/* Introduction以降の最初の部分（2カラム） */}
                {pages.length > 0 && (
                  <div className="two-column-section">
                    <ReactMarkdown
                      remarkPlugins={[remarkMath, remarkGfm]}
                      rehypePlugins={[rehypeKatex]}
                    >
                      {pages[0]}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
              <div className="paper-page-number" aria-label="Page 1">1</div>
            </div>

            {/* 2ページ目以降: すべて2カラム */}
            {pages.slice(1).map((pageContent, index) => (
              <div key={index + 1} className="paper-page">
                <div className="paper-content">
                  <div className="two-column-section">
                    <ReactMarkdown
                      remarkPlugins={[remarkMath, remarkGfm]}
                      rehypePlugins={[rehypeKatex]}
                    >
                      {pageContent}
                    </ReactMarkdown>
                  </div>
                </div>
                <div className="paper-page-number" aria-label={`Page ${index + 2}`}>{index + 2}</div>
              </div>
            ))}
          </div>
          </div>
        )}
      </div>
    </div>
  );
}
